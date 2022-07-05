import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import 'animate.css';
import {useState, useEffect} from 'react';
import axios from '../Axios';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';




function Articles() {
  
  const [articles, setArticles] = useState([]);
  useEffect(()=>{
      VuArticles();
  },[]);

  const VuArticles = () => {
      axios.get('/article').then(res=>{
          setArticles(res.data);
      })
  }

  





  return (
    <div>
        <Navbar/>
<h1 className=' d-flex justify-content-center'> Mes Articles</h1>

<div class="container">
    <div className="row m30">
   
            {articles.map((article)=>(
    <div class="col-md-4 col-12 col-lg-3">
        
     <div class="card ">
            <img src={ article.image } class="card-img-top img-fluid imgcard card-img-top img-thumbnail" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{article.titre}</h5>
          <Link className="btn btn-primary" to={{ pathname: "/view/" + article.id }}><i class="fa-solid fa-eye"></i></Link>
       
          </div>
            </div> 
             </div> 
              
   ))}
   </div>
   </div>
 






<Footer/>
    </div>
  )
}

export default Articles