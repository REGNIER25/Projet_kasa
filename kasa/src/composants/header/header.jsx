import { NavLink } from 'react-router-dom';
import './header.css';
import logokasa from '../../img/logokasa.png';

function Header() {
  return (

    <header className="header">

        <NavLink to="/">
      <img className="logokasa" src={logokasa} alt="Logo Kasa" />
      </NavLink>

      <nav className="nav">


        <NavLink className="navbar-item" to="/">
          Accueil
        </NavLink>

        <NavLink className="navbar-item" to="/a-propos">
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;