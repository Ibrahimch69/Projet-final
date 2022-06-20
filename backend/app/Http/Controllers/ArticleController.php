<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Article::latest()->get());
    }
  
     
    public function store(Request $request)
    {
        Article::create([
            'titre'=>$request->titre,
            'description'=>$request->description,
            'image'=>$request->image,
        ]);
        return response()->json('successfully created');

  
    }
    public function edit($id)
    {
        return response()->json(Article::whereId($id)->first());
    }

    public function update(Request $request, $id)
    {
        $article = Article::whereId($id)->first();

        $article->update([
            'titre'=>$request->titre,
            'description'=>$request->description,
            'image'=>$request->image,
        ]);
        return response()->json('success');

    }

 
    public function destroy($id)
    {
        Article::whereId($id)->first()->delete();

        return response()->json('success');
        
    }
}

