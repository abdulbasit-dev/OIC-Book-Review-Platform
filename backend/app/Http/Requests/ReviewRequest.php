<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Response;

class ReviewRequest extends FormRequest
{
    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            "result" => false,
            "status" => Response::HTTP_UNPROCESSABLE_ENTITY,
            "message" => "The given data was invalid.",
            "errors" => $validator->errors()->all()
        ], Response::HTTP_UNPROCESSABLE_ENTITY));
    }


    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            "book_id" => ["required", "string", "max:20"],
            "review" => ["required", "string"],
            "name" => ["required", "string", "max:100"],
            "rating" => ["required", "integer", "min:1", "max:5"]
        ];
    }
}
