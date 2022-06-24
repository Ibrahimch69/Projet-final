
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

function App() {
  return (
    //j'ai cree le router pour le front 
    //je lui ajoute une route pour la page d'accueil et la page des articles
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Accueil/>}/>
    <Route path="/navbar" element={ <Navbar />}/> 
    <Route path="/footer" element={ <Footer />}/> 
    <Route path="/articles" element={ <Articles />}/> 
 


    <Route path="/cree" element={ <Cree />}/>
    <Route path='/edit/:id' element={<Edit />} />
    <Route path='/view/:id' element={<Vu />} />
    <Route path='/list' element={localStorage.getItem('role') ? <List/> :<Accueil/>} />


    <Route path="/connexion"  element={<Connexion/>} />
    <Route path="/inscription" element={<Inscription/>} />

    
          
    
     
    </Routes>
    </BrowserRouter>
  );
}

export default App;
