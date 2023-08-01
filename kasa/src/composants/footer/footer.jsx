// Import du fichier CSS associé à ce composant
import './footer.css';

// Import de l'image du logo de Kasa
import logokasa2 from '../../img/logokasa2.png';

// Définition du composant Footer
function Footer() {
  return (
    // Le pied de page commence ici avec la classe "footer"
    <footer className="footer">
      {/* Image du logo de Kasa */}
      <img src={logokasa2} alt="Logo Kasa" />
      {/* Texte indiquant que tous les droits sont réservés à Kasa */}
      <div className="rights">
        © 2020 Kasa. All rights reserved
      </div>
    </footer>
  );
}

// Export du composant Footer pour qu'il puisse être utilisé ailleurs
export default Footer;