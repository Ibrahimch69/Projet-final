import { useState, useEffect } from 'react';
import Components from '../components.css'
import Navbar from './Navbar'
import Footer from './Footer'
import img from '../images/img.png'
import 'animate.css';
import Http from '../Http';
import sport from '../images/sport.jpeg'
import spo from '../images/spo.jpg'
import pdp from '../images/pdp.jpg'
import dos from '../images/dos.webp'
import poids from '../images/poids.png'
import muscle from '../images/muscle.png'
import coeur from '../images/coeur.png'

import { Link } from "react-router-dom";



function Accueil() {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    fetchAllUsers();
  }, []);
  // affiche les derniers articles
  const fetchAllUsers = () => {
    Http.get('/article').then(res => {
      setArticle(res.data);
    })
  }
  return (
    <div>
<Navbar/>
      <section>
        <div class="container-fluid mt-5">
          <div className="row ">
            <div className="col-lg-5 mr-auto ">


              <img src={img} className="img-fluid w-25 rounded mx-auto d-block animate__animated  animate__backInDown" alt="logo" />
              {/* <h1 className='text-center animate__animated  animate__backInDown'>SPORTBLOG</h1>  */}
              <h1 className='text-center animate__animated  animate__backInDown titre'>Le sport c'est la vie </h1>
              <p className='text-center animate__animated  animate__backInDown'>Alors dans notre site, il y aurait beaucoup de cours sur le sport. </p>
              <div class="col text-center">
          <a href=""></a>   <button type="button"  className="btn btn-warning btnor animate__animated  animate__backInDown ">Voir les cours</button>

              </div>
            </div>

            <div class="col-lg-6 courir">
              <img src={sport} className="img-fluid animate__animated  animate__backInDown " alt="courir" />
            </div>
          </div>
        </div>
      </section>









      <h1 className=' d-flex justify-content-center mt30  '>A propos</h1>
      <div class="container-fluid  ">
        <div className="row m30 ">
          <div class="col-lg-6 courir ">
            <img src={spo} className="img-fluid w-75 col-md-6 float-md-end mb-3 ms-md-2  " alt="courir" />
          </div>
          <div className="col-lg-5 mr-auto ">
            <p className=''>
              Ce blog émane d’un sentiment de « déjà-vu » sur la très grande majorité des sites web dédiés au sport sur lesquels
              je me suis rendu depuis plusieurs années. Sans critiquer de manière gratuite, je me suis souvent retrouvé déçu par
              la pauvreté des articles et des contenus qui m’étaient proposés quel que soit le type de sujet traité. Pendant trop longtemps,
            </p>

            <p>
              j’ai erré sur un nombre très important de sites préférant la tendance appelée « fast content » qui, en d’autres termes,
              signifie que l’information est traitée de manière superficielle quasiment toujours dans un souci d’instantanéité
            </p>

            <p>
              et de faire partie de la course au buzz. j’ai erré sur un nombre très important de sites préférant la tendance appelée « fast content » qui, en d’autres termes,
              signifie que l’information est traitée de manière superficielle quasiment toujours dans un souci d’instantanéité j’ai erré sur un nombre très important de sites préférant la tendance appelée « fast content » qui, en d’autres termes,
              signifie que l’information est traitée de manière superficielle quasiment toujours dans un souci d’instantanéité
            </p>
          </div>
        </div>
      </div>

      <h1 className='d-flex justify-content-center mt30'>Les bienfaits du sport </h1>
    



      <div class="container">
  <div class="row  text-center m30 ">
 
    <div class="col-md-4 col-12 col-lg-4">
    <img src={muscle} className="img-fluid w-50" alt="courir" />
    <h5>perde du muscle</h5>
 
    </div>
    
 
    <div class="col-md-4 col-12 col-lg-4">
    <img src={poids} className="img-fluid w-50 " alt="courir" />
    <h5 >perde du bois</h5>
    </div>
    <div class="col-md-4 col-12 col-lg-4">
    <img src={coeur} className="img-fluid w-50  " alt="courir" />
    <h5>étre en forme</h5>
    </div>
  </div>
</div> 


      
      <h1 className='d-flex justify-content-center mt30 ' id='mda'> Mes derniers articles</h1>
      <div class="container ">
        <div class="row m30">
          
         
        



        {article.map((article)=>(
    <div class="col-md-4 col-12 col-lg-3">
        
     <div class="card ">
            <img src={ article.image } class="card-img-top img-fluid imgcard card-img-top img-thumbnail" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{article.titre}</h5>
          <p class="card-text">{article.created_at}</p>
      
          <Link className="btn btn-primary" to={{ pathname: "/view/" + article.id }}><i class="fa-solid fa-eye"></i></Link>&nbsp;
       
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

export default Accueil