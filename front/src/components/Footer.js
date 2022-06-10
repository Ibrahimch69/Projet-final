import React from 'react'
import logo from '../images/logo.png'
import Components from '../components.css'
import img from '../images/img.png'
function footer() {
  return (
    <div>
        <footer class="page-footer dark ">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-12">
                        <h6 class="text-uppercase font-weight-bold text-light">SPORTBLOG</h6>
                        <img src={img} className="" alt="logo"  width="50" height="50" /> 
                        <p className='text-light'>Le sport c'est la vie</p>
                        <p className='text-light'>ibrahimchergui69@gmail.com</p>
                        <p class=" text-light">+33 6 12 34 56 78</p>
                        <p className='  text-light'> suivez-nous sur les réseaux sociaux </p> 
                        <div class="text-end wh">
                       <i class="fa-brands fa-instagram fa-5x m-5" ></i>
                        <i class="fa-brands fa-facebook fa-5x m-5"></i>
                        <i class="fa-brands fa-linkedin fa-5x m-5"></i>
                        <i class="fa-brands fa-twitter fa-5x  m-5"></i>
                        </div>
                        

                        </div>
                          </div>
                            </div>
    </footer>

    </div>
  )
}

export default footer