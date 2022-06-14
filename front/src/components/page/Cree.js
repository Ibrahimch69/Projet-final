import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from '../Http'

export default function Create() {
    const navigate = useNavigate();
    const [article,setArticle] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setArticle(values => ({...values,[name]:value}))
    }

    const submitForm = () =>{
        http.post('/article',article).then((res)=>{
            navigate('/');
        })
    }
    return (
        <div>
            <h2>New User</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <label>titre</label>
                        <input type="text" name="titre" className="form-control mb-2"
                                value={article.titre || ''}
                                onChange={handleChange}
                             />

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
            </div>
        </div>

    )
}