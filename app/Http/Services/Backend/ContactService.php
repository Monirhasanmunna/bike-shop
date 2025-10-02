<?php
namespace App\Http\Services\Backend;

use App\Models\BlogSection;
use App\Models\Contact;
use App\Traits\FileSaver;
use App\Traits\Request;
use App\Traits\Response;
use Bitsmind\GraphSql\Facades\QueryAssist;
use Bitsmind\GraphSql\QueryAssist as QueryAssistTrait;

class ContactService
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

            $dbQuery = Contact::query();
            $dbQuery = QueryAssist::queryOrderBy($dbQuery, $query);
            $dbQuery = QueryAssist::queryWhere($dbQuery, $query, ['status']);
            $dbQuery = QueryAssist::queryGraphSQL($dbQuery, $query, new Contact);

            if (array_key_exists('search', $query)) {
                $dbQuery = $dbQuery->where('name', 'like', '%'.$query['search'].'%')
                                    ->orWhere('email', 'like', '%'.$query['search'].'%');
            }

            $count = $dbQuery->count();
            $contacts = $this->queryPagination($dbQuery, $query)->get();

            return $this->response([
                'contacts' => $contacts,
                'count' => $count,
                'contactStatus' => commonStatus(),
                ...$query
            ])->success();
        }
        catch (\Exception $exception) {
            return $this->response()->error($exception->getMessage());
        }
    }

    /**
     * @param string $id
     * @return array
     */
    public function deleteContact (string $id): array
    {
        try {
            $contact = Contact::where('id', $id)->first();
            if (!$contact) {
                return $this->response()->error("Contact not found");
            }

            $contact->delete();

            return $this->response()->success('Contact Deleted Successfully');
        }
        catch (\Exception $exception) {
            return $this->response()->error($exception->getMessage());
        }
    }
}
