<?php
namespace App\Http\Services\Backend;

use App\Models\BlogSection;
use App\Traits\FileSaver;
use App\Traits\Request;
use App\Traits\Response;
use Bitsmind\GraphSql\Facades\QueryAssist;
use Bitsmind\GraphSql\QueryAssist as QueryAssistTrait;


class BioSectionService
{
    use Request,Response, QueryAssistTrait, FileSaver;

    /**
     * @param array $query
     * @return array
     */
    public function getData (array $query): array
    {
        try {
            $validationErrorMsg = $this->queryParams($query)->required([]);
            if ($validationErrorMsg) {
                return $this->response()->error($validationErrorMsg);
            }

            if (!array_key_exists('graph', $query)) {
                $query['graph'] = '{*}';
            }

            $dbQuery = BlogSection::query();
            $dbQuery = QueryAssist::queryWhere($dbQuery, $query, ['page_name']);
            $bio_section = $dbQuery->first();

            return $this->response(['bio_section' => $bio_section])->success();
        }
        catch (\Exception $exception) {
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
            $heroSection = BlogSection::where('page_name', $payload['page_name'])->first();

            $imageName = null;
            if(!$heroSection) {
                if(!empty($payload['image'])){
                    $imageName = $this->upload_file( $payload['image'], 'home', 'blog-section');
                }
                BlogSection::create( $this->_formatedBioSectionCreatedData( $payload, $imageName));
            }
            else{
                if(!empty($payload['image'])){
                    $imageName = $this->upload_file( $payload['image'], 'home', 'blog-section', $heroSection->image);
                }
                $heroSection->update( $this->_formatedBioSectionUpdatedData( $payload, $imageName));
            }

            return $this->response()->success('Bio section updated successfully');

        } catch (\Exception $exception) {
            return $this->response()->error($exception->getMessage());
        }
    }

    /**
     * @param array $payload
     * @param string $imageName
     * @return array
     */
    private function _formatedBioSectionCreatedData(array $payload, string $imageName): array
    {
        $data = [
            'page_name' => $payload['page_name'],
            'image' => $imageName,
        ];

        if(!empty($payload['description']) && array_key_exists('description', $payload))  $data['description'] = $payload['description'];

        return $data;
    }


    /**
     * @param array $payload
     * @param string|null $imageName
     * @return array
     */
    private function _formatedBioSectionUpdatedData(array $payload, string $imageName = null): array
    {
        $data = [];

        if(array_key_exists('description', $payload) && !empty($payload['description']))    $data['description']    = $payload['description'];
        if($imageName)                                                                           $data['image']          = $imageName;

        return $data;
    }
}
