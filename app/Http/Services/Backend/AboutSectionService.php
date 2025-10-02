<?php
namespace App\Http\Services\Backend;

use App\Models\AboutSection;
use App\Traits\FileSaver;
use App\Traits\Request;
use App\Traits\Response;
use Bitsmind\GraphSql\Facades\QueryAssist;
use Bitsmind\GraphSql\QueryAssist as QueryAssistTrait;


class AboutSectionService
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

            $dbQuery = AboutSection::query();
            $dbQuery = QueryAssist::queryWhere($dbQuery, $query, ['status']);
            $about_section = $dbQuery->first();

            return $this->response(['about_section' => $about_section])->success();
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
            $heroSection = AboutSection::first();

            $imageName = null;
            if(!$heroSection) {
                if(!empty($payload['image'])){
                    $imageName = $this->upload_file( $payload['image'], 'about', 'about-section');
                }
                AboutSection::create( $this->_formatedAboutSectionCreatedData( $payload, $imageName));
            }
            else{
                if(!empty($payload['image'])){
                    $imageName = $this->upload_file( $payload['image'], 'home', 'hero-section', $heroSection->image);
                }
                $heroSection->update( $this->_formatedAboutSectionUpdatedData( $payload, $imageName));
            }

            return $this->response()->success('About section updated successfully');

        } catch (\Exception $exception) {
            return $this->response()->error($exception->getMessage());
        }
    }

    /**
     * @param array $payload
     * @param string $imageName
     * @return array
     */
    private function _formatedAboutSectionCreatedData(array $payload, string $imageName): array
    {
        return [
            'title' => $payload['title'],
            'description' => $payload['description'],
            'image' => $imageName,
        ];
    }


    /**
     * @param array $payload
     * @param string|null $imageName
     * @return array
     */
    private function _formatedAboutSectionUpdatedData(array $payload, string $imageName = null): array
    {
        $data = [];

        if(array_key_exists('title', $payload) && !empty($payload['title']))                $data['title']          = $payload['title'];
        if(array_key_exists('description', $payload) && !empty($payload['description']))    $data['description']    = $payload['description'];
        if($imageName)                                                                           $data['image']          = $imageName;

        return $data;
    }
}
