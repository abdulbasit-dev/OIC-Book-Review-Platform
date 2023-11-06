<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Response;

class BookCollection extends ResourceCollection
{

    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection->transform(function ($book) {
                return [
                    "id" => $book['id'],
                    'title' => $book['volumeInfo']['title'],
                    'cover_image' => $book['volumeInfo']['imageLinks']['smallThumbnail'] ?? null,
                    'publication_year' => $book['volumeInfo']['publishedDate'] ?? null,
                ];
            })
        ];
    }

    public function with($request)
    {
        return [
            'result' => true,
            'status' => Response::HTTP_OK,
            "message" => "Books retrieved successfully"
        ];
    }
}
