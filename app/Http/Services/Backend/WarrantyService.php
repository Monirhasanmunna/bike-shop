<?php
namespace App\Http\Services\Backend;

use App\Models\WarrantyClaim;
use App\Traits\FileSaver;
use App\Traits\Request;
use App\Traits\Response;
use Bitsmind\GraphSql\Facades\QueryAssist;
use Bitsmind\GraphSql\QueryAssist as QueryAssistTrait;


class WarrantyService
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
                $query['graph'] = '{*,product{name}}';
            }

            $dbQuery = WarrantyClaim::query();
            $dbQuery = QueryAssist::queryOrderBy($dbQuery, $query);
            $dbQuery = QueryAssist::queryWhere($dbQuery, $query, ['status']);
            $dbQuery = QueryAssist::queryGraphSQL($dbQuery, $query, new WarrantyClaim);

            if (array_key_exists('search', $query)) {
                $dbQuery = $dbQuery->where('mobile_number', 'like', '%'.$query['search'].'%')
                                    ->orWhere('name', 'like', '%'.$query['search'].'%');
            }

            $count = $dbQuery->count();
            $warranties = $this->queryPagination($dbQuery, $query)->get();

            return $this->response([
                'warranties' => $warranties,
                'count' => $count,
                'warrantyStatus' => warrantyStatus(),
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
    public function changeStatus (array $payload): array
    {
        try {
            $warranty = WarrantyClaim::where('id', $payload['id'])->first();
            if (!$warranty) {
                return $this->response()->error("Warranty not found");
            }

            $warranty->update(['status' => $payload['status']]);

            return $this->response(['warranty' => $warranty])->success('Warranty Status Updated Successfully');
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
            $warranty = WarrantyClaim::where('id', $id)->first();
            if (!$warranty) {
                return $this->response()->error("WarrantyClaim not found");
            }

            if(!empty($warranty->image)){
                unlink(public_path($warranty->image));
            }

            $warranty->delete();

            return $this->response()->success('WarrantyClaim Deleted Successfully');
        }
        catch (\Exception $exception) {
            return $this->response()->error($exception->getMessage());
        }
    }
}
