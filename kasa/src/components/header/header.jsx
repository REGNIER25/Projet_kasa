import logokasa from './logokasa.png';
import './header.css';

function Header() {
  return (
    <header className="header">
      <img className="logokasa" src={logokasa} alt="Logo Kasa" />
      <nav className="nav"><a href="#" >Accueil</a>
        <a href="#" >A propos</a></nav>
    </header>
  );
}

export default Header;