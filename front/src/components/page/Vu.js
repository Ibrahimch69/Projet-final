import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Http from "../../Http";
import Navbar from "../Navbar";



export default function View(props) {
    const [article,setArticle] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        fetchArticle()
    },[]);

    const fetchArticle= () =>{
        Http.get('/article/'+id+'/edit').then((res)=>{
            setArticle({
               titre:res.data.titre,
                description:res.data.description,
                image:res.data.image,
            });
        });
    }
    


 
    
    return ( 
        <div>
            <Navbar/>
            <div className="container">
            <div class=" mb-3 m-5">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={article.image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{article.titre}</h5>
        <p class="card-text">{article.description}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
            </div>
         </div>
          </div>
         
        
    )
}