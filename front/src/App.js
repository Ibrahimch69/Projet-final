
import Navbar from './components/Navbar';
import { Route, BrowserRouter , Routes } from 'react-router-dom';
import Accueil from './components/Accueil';
import Footer from './components/Footer';
import Articles from './components/Articles';
import Cree from './components/page/Cree';
import Edit from './components/page/Edit';
import Vu from './components/page/Vu';
import List from './components/page/List';
import Connexion from './components/auth/Connexion';
import Inscription from './components/auth/Inscription';
import ProtectedRoute from './components/page/ProtectedRoute';
import Protectedadmin from './components/page/Protectedadmin';

function App() {
  return (
    //j'ai cree le router pour le front 
    //je lui ajoute une route pour la page d'accueil et la page des articles
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Accueil/>}/>
    <Route path="/navbar" element={ <Navbar />}/> 
    <Route path="/footer" element={ <Footer />}/> 
  

    <Route path="/articles" element={<ProtectedRoute><Articles/></ProtectedRoute>} />
 

     
    <Route path="/cree"    element={<Protectedadmin><Cree/></Protectedadmin>} />
    <Route path='/edit/:id'   element={<Protectedadmin><Edit/></Protectedadmin>} />
    <Route path='/view/:id'element={<ProtectedRoute><Vu/></ProtectedRoute>} />
    <Route path='/list'  element={<Protectedadmin><List/></Protectedadmin>} />


    <Route path="/connexion"  element={<Connexion/>} />
    <Route path="/inscription" element={<Inscription/>} />

    
          
    
     
    </Routes>
    </BrowserRouter>
  );
}

export default App;
