<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Response;

class BookReviewCollection extends ResourceCollection
{

    public function toArray(Request $request): array
    {
        return [
            // in the data should all reviews be returned
            'data' => [
                // get average rating of all reviews it should one decimal place and its from 1 to 5
                "average_rating" => round($this->collection->avg('rating'), 1),
                "reviews" => $this->collection->transform(function ($review) {
                    return [
                        "id" => $review->id,
                        "name" => $review->name,
                        "review" => $review->review,
                        "rating" => $review->rating,
                        // use diffForHumans() to get the time difference between the review and now
                        "created_at" => Carbon::parse($review->created_at)->diffForHumans()
                    ];
                })
            ]
        ];
    }

    public function with($request)
    {
        return [
            'result' => true,
            'status' => Response::HTTP_OK,
            "message" => "Reviews retrieved successfully"
        ];
    }
}
