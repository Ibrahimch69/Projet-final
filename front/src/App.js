
import Navbar from './components/Navbar';
import { Route, BrowserRouter , Routes } from 'react-router-dom';
import Accueil from './components/Accueil';
import Footer from './components/Footer';
import Articles from './components/Articles';
import Test from './components/Test';

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
    <Route path="/test" element={ <Test />}/>
    
     
    </Routes>
    </BrowserRouter>
  );
}

export default App;
