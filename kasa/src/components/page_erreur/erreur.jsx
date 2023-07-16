
import './erreur.css';
import Header from '../header/header';
import Footer from '../footer/footer';
function Erreur() {
  return (
    <>
<Header/>

<h1>404</h1>
<p>Oups! La page que vous demandez n'existe pas.</p>

<a href="#">Retourner sur la page d’accueil</a>
    
    <Footer/>
    </>
  );
}

export default Erreur;