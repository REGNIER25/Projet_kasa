
import './erreur.css';

import Header from '../../composants/header/header';
import Footer from '../../composants/footer/footer';

function Erreur() {
  return (
    <>

<Header/>

<h1>404</h1>
<div className='texte_erreur'>Oups! La page que vous demandez n'existe pas.</div>

<a className='lien_accueil' href="./components/home.jsx">Retourner sur la page d’accueil</a>


{/* <NavLink
    className="navbar-item"
    activeClassName="is-active"
    to="/home"
    exact
>
Retourner sur la page d’accueil
</NavLink> */}
<Footer/>
  
    </>
  );
}

export default Erreur;