<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:60',
            'email' => 'required|email|max:60|unique:users',
            'password' => 'required|max:30',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'error' => $validator->errors()
            ]);
        } else {
        
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();
        return response()->json(['user'=>$request->all()]);
     }
    }

//gestion de role et permission pour l'utilisateur 
    public function login(Request $request)
{
    $validator = Validator::make($request->all(), [
        'email' => 'required|email|max:60',
        'password' => 'required|max:30',
    ]);
    if ($validator->fails()) {
        return response()->json([
            'error' => $validator->errors()
        ]);
    } else {
        $user = User::where('email', $request->email)->first(); 
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
        else {
            return response()->json(['error'=>'email or password is incorrect'],401);
        }
    }
}
   


    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json(['message'=>'logout']);
    }

    public function auth(Request $request)
    {
        $user = User::where('token', $request->token)->first();
        if ($user) {
            return response()->json([
                'status' => true,
            ]);
        } else {
            return response()->json([
                'status' => false,
            ]);
        }
    }

    public function authAdmin(Request $request)
    {
        $user = User::where('token', $request->token)->first();
        if ($user) {
            if ($user->role == 1) {
                return response()->json([
                    'status' => true,
                ]);
            } else {
                return response()->json([
                    'status' => false,
                ]);
            }
            
        } else {
            return response()->json([
                'status' => false,
            ]);
        }
    }









// public function login(Request $request)
//     {
//         $validator = Validator::make($request->all(), [
//             'email' => 'required|email|max:60',
//             'password' => 'required|max:30',
//         ]);

//         if ($validator->fails()) {
//             return response()->json([
//                 'error' => 'email ou mot de passe incorrect'
//             ]);
//         } else {
//             $user = User::where('email', $request->email)->first();
//             if ($user && Hash::check($request->password, $user->password)) {
//                 $token = Str::random(80);
//                 $user->token = $token;
//                 $user->save();
//                 return response()->json([
//                     'status' => true,
//                     'token' => $user->token
//                 ]);
//             } else {
//                 return response()->json([
//                     'error' => 'email ou mot de passe incorrect',
//                 ]);
//             }
//         }
//     }

//     public function auth(Request $request)
//     {
//         $user = User::where('token', $request->token)->first();
//         if ($user) {
//             return response()->json([
//                 'status' => true,
//             ]);
//         } else {
//             return response()->json([
//                 'status' => false,
//             ]);
//         }
//     }

//     public function authAdmin(Request $request)
//     {
//         $user = User::where('token', $request->token)->first();
//         if ($user) {
//             if ($user->role == 1) {
//                 return response()->json([
//                     'status' => true,
//                 ]);
//             } else {
//                 return response()->json([
//                     'status' => false,
//                 ]);
//             }
            
//         } else {
//             return response()->json([
//                 'status' => false,
//             ]);
//         }
//     }
























}