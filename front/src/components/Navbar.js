import React from 'react'
 import logoblogsport from '../images/logoblogsport.png'
import App from '../App.css'
import img from '../images/img.png'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    // Pour la navbar du site 
/* <nav className="navbar navbar-expand-lg orange navbar-light ">  */

<nav className="navbar navbar-expand-lg navbar-light fixed-top ">



  <div className="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-start" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <img src={logoblogsport} class="logo" alt="logo"  width="50" height="50" />
        </li>
        <li class="nav-item">
       <Link to={"/"}> <a class="nav-link" href="">Accueil</a></Link>  
        </li>
        <li class="nav-item">
         <Link to={{  pathname:"/articles/"}}      > <a class="nav-link" >Articles</a></Link>
        </li>
        <li class="nav-item">
         <Link to={{  pathname:"/list/"}}   > <a class="nav-link" >paramètre</a></Link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar

  
       
    
          






