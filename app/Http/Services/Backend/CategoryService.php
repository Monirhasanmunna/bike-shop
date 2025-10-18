<?php
namespace App\Http\Services\Backend;

use App\Models\Category;
use App\Traits\FileSaver;
use App\Traits\Request;
use App\Traits\Response;
use Bitsmind\GraphSql\Facades\QueryAssist;
use Bitsmind\GraphSql\QueryAssist as QueryAssistTrait;
use Illuminate\Support\Str;

class CategoryService
{
    use Request,Response, QueryAssistTrait, FileSaver;

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
                $query['graph'] = '{*}';
            }

            $dbQuery = Category::query();
            $dbQuery = QueryAssist::queryOrderBy($dbQuery, $query);
            $dbQuery = QueryAssist::queryWhere($dbQuery, $query, ['status']);
            $dbQuery = QueryAssist::queryGraphSQL($dbQuery, $query, new Category);

            if (array_key_exists('search', $query)) {
                $dbQuery = $dbQuery->where('name', 'like', '%'.$query['search'].'%');
            }

            $count = $dbQuery->count();
            $categories = $this->queryPagination($dbQuery, $query)->get();

            return $this->response([
                'categories' => $categories,
                'count' => $count,
                'categoryStatus' => commonStatus(),
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
            Category::create( $this->_formatedCategoryCreatedData( $payload));

            return $this->response()->success('Category created successfully');

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
            $category = Category::where('id', $payload['id'])->first();
            if(!$category) {
                return $this->response()->error('Category not found');
            }

            $category->update( $this->_formatedCategoryUpdatedData( $payload));

            return $this->response()->success('Category updated successfully');

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
            $category = Category::where('id', $payload['id'])->first();
            if (!$category) {
                return $this->response()->error("Category not found");
            }

            $category->update(['status' => $payload['status']]);

            return $this->response(['category' => $category])->success('Category Status Updated Successfully');
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
            $category = Category::where('id', $id)->first();
            if (!$category) {
                return $this->response()->error("Category not found");
            }

            $category->delete();

            return $this->response()->success('Category Deleted Successfully');
        }
        catch (\Exception $exception) {
            return $this->response()->error($exception->getMessage());
        }
    }


    /**
     * @param array $payload
     * @return array
     */
    private function _formatedCategoryCreatedData(array $payload): array
    {
        return [
            'name'              => $payload['name'],
            'slug'              => Str::slug($payload['name']),
        ];
    }


    /**
     * @param array $payload
     * @return array
     */
    private function _formatedCategoryUpdatedData(array $payload): array
    {
        $data = [];

        if(!empty($payload['name']))               $data['name']          = $payload['name'];
        if(!empty($payload['name']))               $data['slug']          = Str::slug($payload['name']);

        return $data;
    }
}
