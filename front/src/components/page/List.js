import React from 'react'
import {useState, useEffect} from 'react';
import Http from '../../Http';
import { Link } from "react-router-dom";
import Components from '../../components.css'
function Home() {
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
<div className="text-end">
    <Link className="btn btn-success" to={{ pathname: "/cree/"  }}>Ajoute</Link>
    </div>
    <div class="container">
    <div className="row">
   
            {users.map((user)=>(
    <div class="col-md-4 col-12 col-lg-3">
        
     <div class="card ">
            <img src={ user.image } class="card-img-top img-fluid imgcard card-img-top img-thumbnail" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{user.titre}</h5>
          <p class="card-text">{user.created_at}</p>
          <Link className="btn btn-info" to={{ pathname: "/edit/" + user.id }}>Edit</Link>&nbsp;
          <Link className="btn btn-primary" to={{ pathname: "/view/" + user.id }}>View</Link>&nbsp;
          <button type="button" className="btn btn-danger"
                            onClick={()=>{deleteUser(user.id)}}
                           >Delete</button>
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