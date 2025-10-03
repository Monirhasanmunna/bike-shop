<?php
namespace App\Http\Services\Backend;

use App\Models\Distributor;
use App\Traits\FileSaver;
use App\Traits\Request;
use App\Traits\Response;
use Bitsmind\GraphSql\Facades\QueryAssist;
use Bitsmind\GraphSql\QueryAssist as QueryAssistTrait;
use Illuminate\Support\Str;

class DistributorService
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

            $dbQuery = Distributor::query();
            $dbQuery = QueryAssist::queryOrderBy($dbQuery, $query);
            $dbQuery = QueryAssist::queryWhere($dbQuery, $query, ['status']);
            $dbQuery = QueryAssist::queryGraphSQL($dbQuery, $query, new Distributor);

            if (array_key_exists('search', $query)) {
                $dbQuery = $dbQuery->where('name', 'like', '%'.$query['search'].'%');
            }

            $count = $dbQuery->count();
            $distributors = $this->queryPagination($dbQuery, $query)->get();

            return $this->response([
                'distributors' => $distributors,
                'count' => $count,
                'distributorStatus' => commonStatus(),
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
            $imageName = $this->upload_file( $payload['image'], 'distributor','distributor');

            Distributor::create( $this->_formatedDistributorCreatedData( $payload, $imageName));

            return $this->response()->success('Distributor created successfully');

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
            $distributor = Distributor::where('id', $payload['id'])->first();
            if(!$distributor) {
                return $this->response()->error('Distributor not found');
            }

            $imageName = null;
            if($payload['image']){
                $imageName = $this->upload_file( $payload['image'], 'distributor', 'distributor', $distributor->image);
            }

            $distributor->update( $this->_formatedDistributorUpdatedData( $payload, $imageName));

            return $this->response()->success('Distributor updated successfully');

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
            $distributor = Distributor::where('id', $payload['id'])->first();
            if (!$distributor) {
                return $this->response()->error("Distributor not found");
            }

            $distributor->update(['status' => $payload['status']]);

            return $this->response(['distributor' => $distributor])->success('Distributor Status Updated Successfully');
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
            $distributor = Distributor::where('id', $id)->first();
            if (!$distributor) {
                return $this->response()->error("Distributor not found");
            }

            if(!empty($distributor->image)){
                unlink(public_path($distributor->image));
            }

            $distributor->delete();

            return $this->response()->success('Distributor Deleted Successfully');
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
    private function _formatedDistributorCreatedData(array $payload, string $imageName): array
    {
        return [
            'name'              => $payload['name'],
            'image'              => $imageName,
        ];
    }


    /**
     * @param array $payload
     * @param string|null $imageName
     * @return array
     */
    private function _formatedDistributorUpdatedData(array $payload, string $imageName = null): array
    {
        $data = [];

        if(!empty($payload['name']))               $data['name']          = $payload['name'];
        if($imageName)                             $data['image']         = $imageName;

        return $data;
    }
}
