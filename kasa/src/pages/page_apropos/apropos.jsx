import React from 'react';
// Importe le module React pour utiliser les fonctionnalités de React dans le fichier.
import Collapse from '../../composants/collapse/collapse';
// Importe le composant Collapse depuis le fichier situé à l'emplacement ../../composants/collapse/collapse.
import './apropos.css';
// Importe les styles CSS spécifiques pour la page "À propos".
import bannerapropos from '../../img/banner_apropos.png';

function Apropos() {
  return (
    <>
      <img className="bannerapropos" src={bannerapropos} alt="Bannière A propos" /> {/* Affiche l'image bannerapropos.png en tant que bannière de la page "À propos". La classe CSS bannerapropos peut être utilisée pour appliquer des styles spécifiques à l'image de la bannière. */}

      <div className='valeurs'>

        <Collapse title="Fiabilité">
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </Collapse>

        <Collapse title="Respect">

          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </Collapse>
        <Collapse title="Service">

          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </Collapse>

        <Collapse title="Sécurité">
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </Collapse>
      </div>
    </>
  );
}

export default Apropos; // Exporte le composant Apropos pour qu'il puisse être utilisé ailleurs dans l'application.
