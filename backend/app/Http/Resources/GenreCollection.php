<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Response;

class GenreCollection extends ResourceCollection
{

    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection->map(function ($data) {
                return [
                    'name' => $data
                ];
            })
        ];
    }

    public function with($request)
    {
        return [
            'result' => true,
            'status' => Response::HTTP_OK,
            "message" => "Genres retrieved successfully"
        ];
    }
}
