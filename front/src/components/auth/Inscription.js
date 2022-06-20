import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from '../../Http'
function Inscription() {


  const navigate = useNavigate();
  const [inputs,setInputs] = useState({});
  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value; 
      setInputs(values => ({...values,[name]:value}))
  }

   const submitForm = () =>{
      http.post('/register',inputs).then((res)=>{
          navigate('/connexion');
       })
   }










  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
    <div>Inscription</div>
    <div class="form-group">
    <label for="email">Nom:</label>
    <input type="text" class="form-control" name="name"    value={inputs.name} onChange={handleChange} placeholder="Enter nom" id="nom"/>
    </div>


  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control"  name="email"    value={inputs.email} onChange={handleChange} placeholder="Enter email" id="email"/>
  </div>

  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control"  name="password"    value={inputs.password} onChange={handleChange} placeholder="Enter password" id="pwd"/>
  </div>
  
  <button type="button" onClick={submitForm} className="btn btn-info mt-2">Create</button>
    </div>
    </div>
    </div>
  )
}

export default Inscription;