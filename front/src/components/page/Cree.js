import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../../Axios';

export default function Create() {
    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const navigation = useNavigate();

    const submitForm = () =>{
        axios.post('/article',{titre,description,image}).then((res)=>{
            navigation('/list');
        })
     }
    return (
        <div>
            <h2 className="text-center">Ajoute un nouvel article.</h2>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card p-4">
                        <label>titre</label>
                        <input type="text" name="titre" className="form-control mb-2"

                            onChange={(e) => setTitre(e.target.value)}
                        />
                        <label>description</label>
                        <input type="description" name="description" className="form-control mb-2"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <label>image</label>
                        <input type="text" name="image" className="form-control mb-2"
                            onChange={(e) => setImage(e.target.value)}
                        />
                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Create</button>
                        </div>
                        </div>
                        </div>
        </div>

    )
}




   // const navigate = useNavigate();
    // const [article,setArticle] = useState({});
    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setArticle(values => ({...values,[name]:value}))
    // }

    // const submitForm = () =>{
    //     axios.post('/article',article).then((res)=>{
    //         navigate('/list');
    //     })
    // }


        {/* <h2 className="text-center">Ajoute un nouvel article.</h2>     
            <div className="row">
            <div className="col-md-6 mx-auto">
                    <div className="card p-4">
                        <label>titre</label>
                        <input type="text" name="titre" className="form-control mb-2"
                                value={article.titre || ''}
                                onChange={handleChange}    />

                        <label>description</label>
                        <input type="description" name="description" className="form-control mb-2"
                            value={article.description || ''}
                            onChange={handleChange}
                        />

                        <label>image</label>
                        <input type="text" name="image" className="form-control mb-2"
                            value={article.image || ''}
                            onChange={handleChange}
                             />

                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Create</button>
                    </div>
                </div>
            </div> */}