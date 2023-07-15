import logokasa from './logokasa.png';
import './header.css';

// import {useHistory} from "react-router-dom";


function Header() {
  return (
    <header className="header">
      <img className="logokasa" src={logokasa} alt="Logo Kasa" />
      <nav className="nav">
      <a href="#" >Accueil</a>

        <a href="apropos.jsx" target="_blank">A propos</a>

        
{/* {function redirection() {

  const history = useHistory(),
  const faireRedirection = () =>{ 
    let url = "maNouvelleURL",
    history.push(url),
  }

  return (
      <Button 
            onClick={faireRedirection}
            >
              Mon Bouton va rediriger sur "maNouvelleURL" si on clique dessus
        </Button>
  ),
}
export default redirection;} */}

        </nav>
    </header>
  );
}

export default Header;