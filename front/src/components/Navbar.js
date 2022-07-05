import { useState, useEffect } from 'react';
import logoblogsport from '../images/logoblogsport.png'
import Components from '../components.css'
import img from '../images/img.png'
import { Link } from 'react-router-dom'
import axios from '../Axios'
;
function Navbar() {


  const submit = () => {
    localStorage.clear();
    window.location.href = "/";
    
  }; 




  let acce_article = '' ;
  if(localStorage.getItem('token') != undefined){
    acce_article=(
      <a class="nav-link" href='/articles' >Articles</a>
    )
  

  }else{
    acce_article = (
      <div>
      <a class="nav-link"  data-bs-toggle="modal" data-bs-target="#exampleModal" >Articles</a>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Vous devez être connecté pour accéder à cette page
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          {/* < button type="button" class="btn btn-primary" href='/connexion' >se connecte</button> */}
        
          <Link className="btn btn-primary" to='/connexion'>se connecte</Link>
          
        </div>
      </div>
    </div>
  </div>
  </div>

    )
  
  }


  let Logout = "";
  if (!localStorage.getItem('token')) {
    Logout = (
      <ul className="navbar-nav">
        <li class="nav-item">
          <a class="nav-link " href='/connexion' >connexion</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href='/inscription' >inscription</a>
        </li>
      </ul>
    )
  } else {
    Logout = (
      <li class="nav-item">
        <a class="nav-link btn btn-danger  " onClick={submit} >deconnexion</a>
      </li>
    )
}
//condiation pour le role
let role = "";
if (localStorage.getItem('role') === "admin") {
  role = (
    <ul className="navbar-nav">
   <li class="nav-item">
              <a class="nav-link" href='/list' >paramètre</a>
            </li>
            </ul> ) }




  return (
    // Pour la navbar du site 
    /* <nav className="navbar navbar-expand-lg orange navbar-light ">  */

    <nav className="navbar navbar-expand-lg navbar-light  ">



      <div className="container-fluid">
        <a class="navbar-brand " href="#"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-start" id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item ">
              <img src={logoblogsport} class="logo" alt="logo" width="50" height="50" />
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/" >Accueil</a>
            </li>
            <li class="nav-item">
              {acce_article}

            </li>
           {role} 
       

            {Logout}
          
          </ul>
        </div>
      </div>
    </nav>

  )
}
export default Navbar