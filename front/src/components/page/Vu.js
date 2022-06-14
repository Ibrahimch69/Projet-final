import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Http from "../../Http";



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
            <h2>Edit User</h2>
         
                 <div class="col-md-4 col-12 col-lg-3">
      <div class="card">
        <img src={ article.image } class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{ article.titre }</h5>
          <p class="card-text">{ article.description }</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
            </div> 
             </div> 
        </div>

    )
}