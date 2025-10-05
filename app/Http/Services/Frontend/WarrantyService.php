<?php
namespace App\Http\Services\Frontend;

use App\Models\AboutSection;
use App\Models\Distributor;
use App\Models\HeroSection;
use App\Models\Product;
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
                $query['graph'] = '{name,slug}';
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


    /**
     * @param array $payload
     * @return array
     */
    public function storeData(array $payload): array
    {
        try {
            $product = Product::where('slug', $payload['product_slug'])->first();
            if(empty($product)) {
                return $this->response()->error("Product not found");
            }

            $payload['product_id'] = $product->id;

            $imageName = null;
            if(!empty($payload['image'])) {
                $imageName = $this->upload_file( $payload['image'], 'image', 'warranty');
            }

            WarrantyClaim::create( $this->_formatedWarrantyClaimData( $payload, $imageName ));

            return $this->response()->success('Warranty Claimed successfully');
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
    private function _formatedWarrantyClaimData (array $payload, string $imageName): array
    {
        return [
            'product_id' => $payload['product_id'],
            'name' => $payload['name'],
            'district' => $payload['district'],
            'bike_model' => $payload['bike_model'],
            'mobile_number' => $payload['mobile_number'],
            'sealant_use_for' => $payload['sealant_use_for'],
            'image' => $imageName,
        ];
    }
}
