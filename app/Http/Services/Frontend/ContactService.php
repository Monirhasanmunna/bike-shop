<?php
namespace App\Http\Services\Frontend;

use App\Models\BlogSection;
use App\Models\Contact;
use App\Traits\FileSaver;
use App\Traits\Request;
use App\Traits\Response;
use Bitsmind\GraphSql\Facades\QueryAssist;
use Bitsmind\GraphSql\QueryAssist as QueryAssistTrait;
use Illuminate\Support\Str;

class ContactService
{
    use Request,Response, QueryAssistTrait, FileSaver;

    /**
     * @param array $query
     * @param string $pageName
     * @return array
     */

    /**
     * @param array $payload
     * @return array
     */
    public function storeData (array $payload): array
    {
        try {
            Contact::create( $this->_formatedContactCreatedData( $payload));

            return $this->response()->success('Message send Successfully');

        } catch (\Exception $exception) {
            return $this->response()->error($exception->getMessage());
        }
    }


    /**
     * @param array $payload
     * @return array
     */
    private function _formatedContactCreatedData(array $payload): array
    {
        $data = [
            'name' => $payload['name'],
            'email' => $payload['email'],
            'phone' => $payload['phone'],
            'message' => $payload['message'],
        ];

        if(!empty($payload['company_name'])) $data['company_name'] = $payload['company_name'];

        return $data;
    }
}
