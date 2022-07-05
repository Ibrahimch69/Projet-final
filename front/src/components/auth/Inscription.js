import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../../Axios'

  function Inscription() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigate();

  const submitForm = () =>{
    axios.post('/register',{email,name,password}).then((res)=>{
      navigation('/connexion');
    }
    )
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
    <div>Inscription</div>
    <div class="form-group">
    <label for="email">name:</label>
    <input type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder="Enter votre name" className="form-control"/>
    </div>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter  votre  email" className="form-control"/>
  </div>

  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter  votre  password" className="form-control"/>
  </div>
  
  <button type="button" onClick={submitForm} className="btn btn-info mt-2">Create</button>
    </div>
    </div>
    </div>
  )
}

export default Inscription;