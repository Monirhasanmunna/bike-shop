<?php
namespace App\Http\Services\Frontend;

use App\Models\AboutSection;
use App\Models\Distributor;
use App\Models\HeroSection;
use App\Models\Product;
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
                $query['graph'] = '{name,id}';
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
