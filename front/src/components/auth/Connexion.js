import { useState } from "react";
import http from "../../Http";
import { useNavigate } from 'react-router-dom'

function Connexion() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigate();

    function Login(){
        http.post('/login', {
            email: email,
            password: password,
        })  .then(res => {
            if (res.data.token != undefined) {
                console.log(res);
                localStorage.setItem('token', res.data.token);
              //  localStorage.setItem('role', res.data.role);
                navigation('/');
            }  else {
                alert('email ou mot de passe incorrect');
                console.log(res);
            } //pour savoir si il est admin ou non
             if (res.data.role === "admin") {
                localStorage.setItem('role', "admin");
              }





        })
        }
    return (
            <div class="container">
            <div className="row">
        <div className="col-md-6 mx-auto">
                <h1>Connexion</h1>
                <div className="row">
                    <div className="col-md-12 form-group">
                        <label>email</label>
                        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 form-group">
                        <label>Mots de Passe</label>
                        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <input type="submit" onClick={Login} className="btn btn-info m-5"/> 

                    

                        
                    </div>
                </div>
                <a href="/inscription"> <p className="text-center">Cree un compte</p></a>
            </div>
            </div>
        </div>
    );
}

export default Connexion; 



