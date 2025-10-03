<?php
namespace App\Http\Services\Frontend;

use App\Models\AboutSection;
use App\Models\Distributor;
use App\Models\HeroSection;
use App\Models\Product;
use App\Traits\FileSaver;
use App\Traits\Request;
use App\Traits\Response;
use Bitsmind\GraphSql\QueryAssist as QueryAssistTrait;

class HomeService
{
    use Request,Response, QueryAssistTrait, FileSaver;

    /**
     * @param array $query
     * @return array
     */
    public function getData (array $query): array
    {
        try {
            $hero_section   = HeroSection::where('page_name', 'home')->first();
            $about_section  = AboutSection::first();
            $distributors  = Distributor::where('status', STATUS_ACTIVE)->get();
            $products      = Product::where('status', STATUS_ACTIVE)->get();

            return $this->response([
                'hero_section' => $hero_section,
                'about_section' => $about_section,
                'distributors' => $distributors,
                'products' => $products,
            ])->success();
        }
        catch (\Exception $exception) {
            return $this->response()->error($exception->getMessage());
        }
    }

}
