import React from 'react'
 import logoblogsport from '../images/logoblogsport.png'
 import Components from '../components.css'
import img from '../images/img.png'
import {Link} from 'react-router-dom'
function Navbar() {
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
          <img src={logoblogsport} class="logo" alt="logo"  width="50" height="50" />
        </li>
        <li class="nav-item">
       <a class="nav-link " href="/" >Accueil</a>  
        </li>
        <li class="nav-item">
          <a class="nav-link" href='/articles' >Articles</a>
        </li>
        <li class="nav-item">
           <a class="nav-link" href='/list' >paramètre</a>
        </li>
        <li class="nav-item">
       <a class="nav-link " href='/connexion' >connexion</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar

  
       
    
          






