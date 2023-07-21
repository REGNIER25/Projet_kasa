import './header.css';
import logokasa from '../../img/logokasa.png';


import { NavLink } from 'react-router-dom';



function Header() {
  return (
    <header className="header">
      <img className="logokasa" src={logokasa} alt="Logo Kasa" />
      <nav className="nav">

        <NavLink className="navbar-item" activeClassName="is-active" to="/" exact >
          Accueil
        </NavLink>
        <NavLink className="navbar-item" activeClassName="is-active" to="/a-propos" exact >
          A propos
        </NavLink>

      </nav>
    </header>
  );
}

export default Header;