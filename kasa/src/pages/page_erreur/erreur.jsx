import './erreur.css'; // Importe les styles CSS spécifiques pour la page d'erreur.

import { NavLink } from 'react-router-dom'; // Importe le composant NavLink pour créer des liens de navigation dans l'application.

function Erreur() {
  return (
    <> {/* C'est une syntaxe de fragment, utilisée pour englober plusieurs éléments JSX sans créer d'élément DOM supplémentaire */}
      <h1>404</h1> {/* Affiche le titre "404" qui indique une erreur de type "Page not found" */}
      <div className='texte_erreur'>Oups ! La page que vous demandez n'existe pas.</div> {/* Affiche un message d'erreur indiquant que la page demandée n'existe pas */}

      <NavLink className="lien_accueil navbar-item" activeClassName="is-active" to="/" exact > {/* Utilise le composant NavLink pour créer un lien de navigation vers la page d'accueil ("/") */}
        Retourner sur la page d’accueil
      </NavLink>
    </>
  );
}

export default Erreur; // Exporte le composant Erreur pour qu'il puisse être utilisé ailleurs dans l'application.
