<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request)
    {
        validator($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ])->validate();
    if(validator($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ])->fails()){
        return response()->json(['error'=>'email or password is incorrect'],401);
    }
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();
        return response()->json(['user'=>$request->all()]);
    }





    //gestion de role et permission pour l'utilisateur 
    public function login(Request $request)
{
    validator($request->all(), [
        'email' => 'required|email',
        'password' => 'required',
    ])->validate();
    if(validator($request->all(), [
        'email' => 'required|email',
        'password' => 'required',
    ])->fails()){
    return response()->json(['error'=>'email or password is incorrect'],401);

    } 

    else { $user = User::where('email', $request->email)->first(); //on recherche l'utilisateur par son email

        if (Hash::check($request->password, $user->password)) {

            if ($user->role == 1) {
             return response()->json([
                'token' => $user->createToken(time())->plainTextToken,
                'role' => 'admin'
        ]); 
            } else {
           
            return response()->json([
                'token' => $user->createToken(time())->plainTextToken,
            ]); 
        }
        } 
        // else {
        //     return response()->json([
        //         'error' => 'Invalid Credentials'
        //     ]);
        // } 
      
        
        
    }
}
   
   public function logout(Request $request)
    {
        $user = $request->user();
        $user->tokens()->delete();
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }


public function dashboard()
{
    return response()->json([
        "success" => "bievenido",
       ]);
}
  


// public function logout()
// {
//   auth()->user()->tokens->delete(); {
//     return response()->json([
//         "success" => "logout",
//        ]);
// }
// }



}