import './erreur.css';

import { NavLink } from 'react-router-dom';

function Erreur() {
  return (
    <>

      <h1>404</h1>

      <div className='texte_erreur'>Oups ! La page que vous demandez n'existe pas.</div>

      <NavLink className="lien_accueil navbar-item" activeclassname="is-active" to="/">
        {/* Utilise le composant NavLink pour créer un lien de navigation vers la page d'accueil ("/") */}
        Retourner sur la page d’accueil
      </NavLink>
    </>
  );
}

export default Erreur;

