// Import du fichier CSS associé à ce composant
import './header.css';

// Import de l'image du logo de Kasa
import logokasa from '../../img/logokasa.png';

// Import de NavLink depuis React Router pour créer des liens de navigation
import { NavLink } from 'react-router-dom';

// Définition du composant Header
function Header() {
  return (
    // L'en-tête commence ici avec la classe "header"
    <header className="header">
      {/* Image du logo de Kasa */}
      <img className="logokasa" src={logokasa} alt="Logo Kasa" />

      {/* Barre de navigation avec les liens de navigation */}
      <nav className="nav">
        {/* Lien de navigation vers la page d'accueil avec activeClassName pour ajouter une classe si le lien est actif */}
        <NavLink className="navbar-item" activeClassName="is-active" to="/" exact>
          Accueil
        </NavLink>

        {/* Lien de navigation vers la page "À propos" avec activeClassName pour ajouter une classe si le lien est actif */}
        <NavLink className="navbar-item" activeClassName="is-active" to="/a-propos" exact>
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

// Export du composant Header pour qu'il puisse être utilisé ailleurs
export default Header;