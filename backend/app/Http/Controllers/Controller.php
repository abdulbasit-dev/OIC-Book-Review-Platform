<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    protected function jsonResponse($result = true, $message = "", $code = 200, $data = null, $error = null)
    {
        $response = [
            'result' => $result,
            'status' => $code,
            'message' => $message,
        ];

        if ($data !== null || is_array($data)) {
            $response['data'] = $data;
        }

        if ($error) {
            $response['errors'] = $error;
        }

        return response()->json($response, $code);
    }
}
