<?php
namespace App\Http\Services\Frontend;

use App\Models\AboutSection;
use App\Models\Category;
use App\Models\Distributor;
use App\Models\HeroSection;
use App\Models\Product;
use App\Traits\FileSaver;
use App\Traits\Request;
use App\Traits\Response;
use Bitsmind\GraphSql\Facades\QueryAssist;
use Bitsmind\GraphSql\QueryAssist as QueryAssistTrait;

class ProductService
{
    use Request,Response, QueryAssistTrait, FileSaver;

    /**
     * @param array $query
     * @param string $slug
     * @return array
     */
    public function getListData (array $query, string $slug): array
    {
        try {
            $validationErrorMsg = $this->queryParams($query)->required([]);
            if ($validationErrorMsg) {
                return $this->response()->error($validationErrorMsg);
            }

            if (!array_key_exists('graph', $query)) {
                $query['graph'] = '{*,category{name}}';
                $query['status'] = STATUS_ACTIVE;
            }

            $category = Category::where('slug', $slug)->firstOrFail();

            if(!$category){
                return $this->response()->error('Category not found');
            }

            $dbQuery = Product::where('category_id', $category->id);
            $dbQuery = QueryAssist::queryOrderBy($dbQuery, $query);
            $dbQuery = QueryAssist::queryWhere($dbQuery, $query, ['status']);
            $dbQuery = QueryAssist::queryGraphSQL($dbQuery, $query, new Product);
            $products = $dbQuery->get();

            return $this->response([
                'products' => $products,
                'category' => $category,
            ])->success();
        }
        catch (\Exception $exception) {
            return $this->response()->error($exception->getMessage());
        }
    }


    /**
     * @param array $query
     * @return array
     */
    public function getAllData (array $query): array
    {
        try {
            $validationErrorMsg = $this->queryParams($query)->required([]);
            if ($validationErrorMsg) {
                return $this->response()->error($validationErrorMsg);
            }

            if (!array_key_exists('graph', $query)) {
                $query['graph'] = '{*,category{name}}';
                $query['status'] = STATUS_ACTIVE;
            }

            $dbQuery = Product::query();
            $dbQuery = QueryAssist::queryOrderBy($dbQuery, $query);
            $dbQuery = QueryAssist::queryWhere($dbQuery, $query, ['status']);
            $dbQuery = QueryAssist::queryGraphSQL($dbQuery, $query, new Product);
            $products = $dbQuery->get();

            return $this->response([
                'products' => $products,
            ])->success();
        }
        catch (\Exception $exception) {
            return $this->response()->error($exception->getMessage());
        }
    }

    /**
     * @param array $query
     * @param string $slug
     * @return array
     */
    public function getData (array $query, string $slug): array
    {
        try {
            if(empty($query['status'])) {
                $query['status'] = STATUS_ACTIVE;
            }

            if(empty($query['graph'])) {
                $query['graph'] = '{name,image,description}';
            }

            $dbQuery    = Product::where('slug', $slug);
            $dbQuery    = QueryAssist::queryWhere($dbQuery, $query, ['status']);
            $dbQuery    = QueryAssist::queryGraphSQL($dbQuery, $query, new Product);

            $product    = $dbQuery->first();

            return $this->response([
                'product' => $product,
            ])->success();
        }
        catch (\Exception $exception) {
            return $this->response()->error($exception->getMessage());
        }
    }

}
