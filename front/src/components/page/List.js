import React from 'react'
import {useState, useEffect} from 'react';
import axios from '../../Axios';
import { Link } from "react-router-dom";
import Components from '../../components.css'
function Home() {
    const [article, setArticle] = useState([]);
    useEffect(()=>{
        listArticle();
    },[]);

    const listArticle = () => {
        axios.get('/article').then(res=>{
            setArticle(res.data);
        })
    }
    const deleteArticle = (id) => {
        axios.delete('/article/'+id).then(res=>{
            listArticle();
        })
    }

 

   
  return (
  
    <div>
<div className="text-end">
    <Link className="btn btn-success" to={{ pathname: "/cree/"  }}>Ajoute</Link>
    </div>
    <div class="container">
    <div className="row">
            {article.map((article)=>(
    <div class="col-md-4 col-12 col-lg-3">
        
     <div class="card ">
            <img src={ article.image } class="card-img-top img-fluid imgcard card-img-top img-thumbnail" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{article.titre}</h5>
          <p class="card-text">{article.created_at}</p>
          <Link className="btn btn-info" to={{ pathname: "/edit/" + article.id }}><i class="fa-solid fa-pen-to-square"></i></Link>
          <Link className="btn btn-primary" to={{ pathname: "/view/" + article.id }}><i class="fa-solid fa-eye"></i></Link>
          <button type="button" className="btn btn-danger"
                            onClick={()=>{deleteArticle(article.id)}} >
                                <i class="fa-solid fa-trash"></i></button>
          </div>
            </div> 
             </div> 
              
   ))}
   </div>
   </div>
</div>


)
}

export default Home