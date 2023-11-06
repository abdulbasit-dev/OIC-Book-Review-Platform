<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Response;

class BookResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            "id"=> $this->resource['id'],
            'title' => $this->resource['volumeInfo']['title'],
            // big thumbnail
            'cover_image' => $this->resource['volumeInfo']['imageLinks']['thumbnail'] ?? null,
            'publication_year' => $this->resource['volumeInfo']['publishedDate'],
            "description"=> $this->resource['volumeInfo']['description'],
            "authors"=> $this->resource['volumeInfo']['authors'],
        ];
    }

    public function with($request)
    {
        return [
            'result' => true,
            'status' => Response::HTTP_OK,
            "message" => "Books Details retrieved successfully"
        ];
    }
}
