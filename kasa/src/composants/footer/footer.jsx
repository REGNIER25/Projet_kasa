// Import du fichier CSS associé à ce composant
import './footer.css';
import logokasa2 from '../../img/logokasa2.png';

function Footer() {
  return (
    <footer className="footer">
      <img src={logokasa2} alt="Logo Kasa" />
      <div className="rights">
        © 2020 Kasa. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;