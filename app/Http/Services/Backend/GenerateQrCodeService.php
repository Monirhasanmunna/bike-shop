<?php
namespace App\Http\Services\Backend;

use App\Models\AboutSection;
use App\Traits\FileSaver;
use App\Traits\Request;
use App\Traits\Response;
use Bitsmind\GraphSql\Facades\QueryAssist;
use Bitsmind\GraphSql\QueryAssist as QueryAssistTrait;


class GenerateQrCodeService
{
    use Request,Response, QueryAssistTrait;

    public function __construct(private readonly ProductService $productService){}


    /**
     * @return array
     */
    public function generateCode(): array
    {
        $productDBQuery = $this->productService->getListData( ['graph' => '{name,slug}']);

        return $this->response([
            'products' => $productDBQuery['data']['products'],
        ])->success();
    }
}
