import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import 'animate.css';
import {useState, useEffect} from 'react';
import Http from '../Http';

function Articles() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
      fetchAllUsers();
  },[]);

  const fetchAllUsers = () => {
      Http.get('/article').then(res=>{
          setUsers(res.data);
      })
  }
  const deleteUser = (id) => {
      Http.delete('/article/'+id).then(res=>{
          fetchAllUsers();
      })
  }
  return (
    <div>
        <Navbar/>
<h1 className=' d-flex justify-content-center'> Mes Articles</h1>

<div class="container">
    <div className="row m30">
   
            {users.map((user)=>(
    <div class="col-md-4 col-12 col-lg-3">
        
     <div class="card ">
            <img src={ user.image } class="card-img-top img-fluid imgcard card-img-top img-thumbnail" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{user.titre}</h5>
         
       
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