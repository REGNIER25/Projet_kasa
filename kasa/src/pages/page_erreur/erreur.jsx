import './erreur.css';
import { NavLink } from 'react-router-dom';
function Erreur() {
  return (
    <>
      <div className='page-erreur'>
        <h1>404</h1>

        <div className='texte_erreur'>Oups ! La page que{'\n'} vous demandez n'existe pas.</div>

        <NavLink className="lien_accueil navbar-item" activeclassname="is-active" to="/">
          Retourner sur la page d’accueil
        </NavLink>

      </div>
    </>
  );
}

export default Erreur;

