import { Navigate } from 'react-router-dom';



    const Protectedadmin =({children}) => {
     if(localStorage.getItem('role') === 'admin'){
         return children;
     }  else{
            return <Navigate to="/" replace />;
        }
}

export default Protectedadmin;