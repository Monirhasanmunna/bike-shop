<?php
namespace App\Http\Services\Backend;

use App\Models\Product;
use App\Traits\FileSaver;
use App\Traits\Request;
use App\Traits\Response;
use Bitsmind\GraphSql\Facades\QueryAssist;
use Bitsmind\GraphSql\QueryAssist as QueryAssistTrait;
use Illuminate\Support\Str;

class ProductService
{
    use Request,Response, QueryAssistTrait, FileSaver;

    public function __construct(private readonly CategoryService $categoryService){}

    /**
     * @param array $query
     * @return array
     */
    public function getListData (array $query): array
    {
        try {
            $validationErrorMsg = $this->queryParams($query)->required([]);
            if ($validationErrorMsg) {
                return $this->response()->error($validationErrorMsg);
            }

            if (!array_key_exists('graph', $query)) {
                $query['graph'] = '{*,category{name}}';
            }

            $dbQuery = Product::query();
            $dbQuery = QueryAssist::queryOrderBy($dbQuery, $query);
            $dbQuery = QueryAssist::queryWhere($dbQuery, $query, ['status']);
            $dbQuery = QueryAssist::queryGraphSQL($dbQuery, $query, new Product);

            if (array_key_exists('search', $query)) {
                $dbQuery = $dbQuery->where('name', 'like', '%'.$query['search'].'%');
            }

            $count = $dbQuery->count();
            $products = $this->queryPagination($dbQuery, $query)->get();

            $categories = $this->categoryService->getListData(['status' => STATUS_ACTIVE, 'graph' => '{id,name}']);

            return $this->response([
                'products' => $products,
                'categories' => $categories['data']['categories'],
                'count' => $count,
                'productStatus' => commonStatus(),
                ...$query
            ])->success();
        }
        catch (\Exception $exception) {
            return $this->response()->error($exception->getMessage());
        }
    }


    /**
     * @param array $payload
     * @return array
     */
    public function storeData (array $payload): array
    {
        try {
            $imageName = $this->upload_file( $payload['image'], 'product','product');

            Product::create( $this->_formatedProductCreatedData( $payload, $imageName));

            return $this->response()->success('Product created successfully');

        } catch (\Exception $exception) {
            return $this->response()->error($exception->getMessage());
        }
    }


    /**
     * @param array $payload
     * @return array
     */
    public function updateData (array $payload): array
    {
        try {
            $product = Product::where('id', $payload['id'])->first();
            if(!$product) {
                return $this->response()->error('Product not found');
            }

            $imageName = null;
            if($payload['image']){
                $imageName = $this->upload_file( $payload['image'], 'product', 'product', $product->image);
            }

            $product->update( $this->_formatedProductUpdatedData( $payload, $imageName));

            return $this->response()->success('Product updated successfully');

        } catch (\Exception $exception) {
            return $this->response()->error($exception->getMessage());
        }
    }


    /**
     * @param array $payload
     * @return array
     */
    public function changeStatus (array $payload): array
    {
        try {
            $product = Product::where('id', $payload['id'])->first();
            if (!$product) {
                return $this->response()->error("Product not found");
            }

            $product->update(['status' => $payload['status']]);

            return $this->response(['blog' => $product])->success('Product Status Updated Successfully');
        }
        catch (\Exception $exception) {
            return $this->response()->error($exception->getMessage());
        }
    }


    /**
     * @param string $id
     * @return array
     */
    public function deleteData (string $id): array
    {
        try {
            $product = Product::where('id', $id)->first();
            if (!$product) {
                return $this->response()->error("Product not found");
            }

            if(!empty($product->image)){
                unlink(public_path($product->image));
            }

            $product->delete();

            return $this->response()->success('Product Deleted Successfully');
        }
        catch (\Exception $exception) {
            return $this->response()->error($exception->getMessage());
        }
    }


    /**
     * @param array $payload
     * @param string $imageName
     * @return array
     */
    private function _formatedProductCreatedData(array $payload, string $imageName): array
    {
        return [
            'category_id'        => $payload['category_id'],
            'name'               => $payload['name'],
            'slug'               => Str::slug($payload['name']),
            'description'        => $payload['description'],
            'image'              => $imageName,
        ];
    }


    /**
     * @param array $payload
     * @param string|null $imageName
     * @return array
     */
    private function _formatedProductUpdatedData(array $payload, string $imageName = null): array
    {
        $data = [
            'category_id'        => $payload['category_id'],
        ];

        if(!empty($payload['name']))               $data['name']          = $payload['name'];
        if(!empty($payload['name']))               $data['slug']           = Str::slug($payload['name']);
        if(!empty($payload['description']))         $data['description']    = $payload['description'];
        if($imageName)                              $data['image']          = $imageName;

        return $data;
    }
}
