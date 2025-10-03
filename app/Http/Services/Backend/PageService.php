<?php
namespace App\Http\Services\Backend;

use App\Models\Page;
use App\Traits\FileSaver;
use App\Traits\Request;
use App\Traits\Response;
use Bitsmind\GraphSql\Facades\QueryAssist;
use Bitsmind\GraphSql\QueryAssist as QueryAssistTrait;
use Illuminate\Support\Str;

class PageService
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

            $dbQuery = Page::query();
            $dbQuery = QueryAssist::queryOrderBy($dbQuery, $query);
            $dbQuery = QueryAssist::queryWhere($dbQuery, $query, ['status']);
            $dbQuery = QueryAssist::queryGraphSQL($dbQuery, $query, new Page);

            if (array_key_exists('search', $query)) {
                $dbQuery = $dbQuery->where('title', 'like', '%'.$query['search'].'%');
            }

            $count = $dbQuery->count();
            $pages = $this->queryPagination($dbQuery, $query)->get();

            return $this->response([
                'pages' => $pages,
                'count' => $count,
                'pageStatus' => commonStatus(),
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
            Page::create( $this->_formatedPageCreatedData( $payload));

            return $this->response()->success('Page created successfully');

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
            $page = Page::where('id', $payload['id'])->first();
            if(!$page) {
                return $this->response()->error('Page not found');
            }

            $page->update( $this->_formatedPageUpdatedData( $payload));

            return $this->response()->success('Page updated successfully');

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
            $page = Page::where('id', $payload['id'])->first();
            if (!$page) {
                return $this->response()->error("Page not found");
            }

            $page->update(['status' => $payload['status']]);

            return $this->response(['blog' => $page])->success('Page Status Updated Successfully');
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
            $page = Page::where('id', $id)->first();
            if (!$page) {
                return $this->response()->error("Page not found");
            }

            $page->delete();

            return $this->response()->success('Page Deleted Successfully');
        }
        catch (\Exception $exception) {
            return $this->response()->error($exception->getMessage());
        }
    }


    /**
     * @param array $payload
     * @return array
     */
    private function _formatedPageCreatedData(array $payload): array
    {
        return [
            'title'              => $payload['title'],
            'slug'               => Str::slug($payload['title']),
            'content'            => $payload['content'],
        ];
    }


    /**
     * @param array $payload
     * @return array
     */
    private function _formatedPageUpdatedData(array $payload): array
    {
        return [
            'title'              => $payload['title'],
            'slug'               => Str::slug($payload['title']),
            'content'            => $payload['content'],
        ];

    }
}
