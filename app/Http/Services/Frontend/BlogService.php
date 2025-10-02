<?php
namespace App\Http\Services\Frontend;

use App\Models\BlogSection;
use App\Models\HeroSection;
use App\Traits\FileSaver;
use App\Traits\Request;
use App\Traits\Response;
use Bitsmind\GraphSql\Facades\QueryAssist;
use Bitsmind\GraphSql\QueryAssist as QueryAssistTrait;

class BlogService
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

            return $this->response([
                ...$query
            ])->success();
        }
        catch (\Exception $exception) {
            return $this->response()->error($exception->getMessage());
        }
    }

}
