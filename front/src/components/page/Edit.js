import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from '../../Http';


export default function Edit(props) {
    const navigate = useNavigate();
    const [article,setArticle] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        fetchUser()
    },[]);

    const fetchUser= () =>{
            http.get('/article/'+id+'/edit').then((res)=>{
            setArticle({
                titre:res.data.titre,
                description:res.data.description,
                image:res.data.image,
            });
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setArticle(values => ({...values,[name]:value}))
    }

    const submitForm = () =>{
        http.put('/article/'+id,article).then((res)=>{
            navigate('/list');
        })
    }
    return (
        <div>
            <h2 className="text-center">Edit User</h2>
            <div className="row">
            <div className="col-md-6 mx-auto">
                    <div className="card p-4">
                        <label>Titre</label>
                        <input type="text" name="titre" className="form-control mb-2"
                                value={article.titre || ''}
                                onChange={handleChange}
                             />

                        <label>description</label>
                        <input type="email" name="description" className="form-control mb-2"
                            value={article.description || ''}
                            onChange={handleChange}
                        />


                            <label>Image</label>
                        <input type="text" name="image" className="form-control mb-2"
                            value={article.image || ''}
                            onChange={handleChange}
                        />    

                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Update</button>
                    </div>
                </div>
            </div>
        </div>

    )
}