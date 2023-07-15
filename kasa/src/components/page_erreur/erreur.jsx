
import './home.css';
import Header from '../header/header';
import Footer from '../footer/footer';
function Erreur() {
  return (
    <>
<Header/>

<h1>404</h1>
<p>Oups! La page que vous demandez n'existe pas.</p>
    
    <Footer/>
    </>
  );
}

export default Erreur;