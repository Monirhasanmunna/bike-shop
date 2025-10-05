<?php
namespace App\Http\Services\Backend;
use App\Models\Contact;
use App\Models\Visitor;
use App\Models\WarrantyClaim;
use App\Traits\Response;

class DashboardService
{
    use Response;

    /**
     * @param array $query
     * @return array
     */
    public function Home (array $query): array
    {
        try {
            $uniqueVisitor = Visitor::all()->count();

            $warrantyDBQuery            = WarrantyClaim::query();
            $totalWarranty              = $warrantyDBQuery->count();
            $totalWarrantyApplied       = $warrantyDBQuery->where('status',  WARRANTY_APPLIED)->count();
            $totalWarrantyClaimed       = $warrantyDBQuery->where('status',  WARRANTY_CLAIMED)->count();
            $totalWarrantyCancelled     = $warrantyDBQuery->where('status',  WARRANTY_CANCELLED)->count();

           return $this->response([
               'unique_visitor' => $uniqueVisitor,
               'totalWarranty' => $totalWarranty,
               'totalWarrantyApplied' => $totalWarrantyApplied,
               'totalWarrantyClaimed' => $totalWarrantyClaimed,
               'totalWarrantyCancelled' => $totalWarrantyCancelled,
           ])->success();
        } catch (\Exception $exception) {
            return $this->response( )->error($exception->getMessage());
        }
    }
}
