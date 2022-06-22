<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();
        return response()->json(['user'=>$request->all()]);
    }





    
public function login(Request $request)
{
    $user = User::where('email', $request->email)->first(); 
    if ($user) {
        if (Hash::check($request->password, $user->password)) {
            return response()->json([
                'token' => $user->createToken(time())->plainTextToken
            ]);
        } else {
            return response()->json([
                'error' => 'Invalid Credentials'
            ]);
        }
    }
}




public function dashboard()
{
    return response()->json([
        "success" => "bievenido",
       ]);
}
  


public function logout()
{
  auth()->user()->tokens->delete(); {
    return response()->json([
        "success" => "logout",
       ]);
}
}




}