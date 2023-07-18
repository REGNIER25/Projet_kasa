import './header.css';
import logokasa from '../../img/logokasa.png';



function Header() {
  return (
    <header className="header">
      <img className="logokasa" src={logokasa} alt="Logo Kasa" />
      <nav className="nav">
      <a href="#" >Accueil</a>

        <a href="apropos.jsx">À propos</a>

        

        </nav>
    </header>
  );
}

export default Header;