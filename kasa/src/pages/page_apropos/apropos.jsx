import React from 'react'; // Importe le module React pour utiliser les fonctionnalités de React dans le fichier.
import Collapse from '../../composants/collapse/collapse'; // Importe le composant Collapse depuis le fichier situé à l'emplacement ../../composants/collapse/collapse.
import './apropos.css'; // Importe les styles CSS spécifiques pour la page "À propos".
import bannerapropos from '../../img/banner_apropos.png'; // Importe une image (banner_apropos.png) pour être utilisée comme bannière de la page "À propos".

function Apropos() {
  return (
    <>
      <img className="bannerapropos" src={bannerapropos} alt="Bannière A propos" /> {/* Affiche l'image bannerapropos.png en tant que bannière de la page "À propos". La classe CSS bannerapropos peut être utilisée pour appliquer des styles spécifiques à l'image de la bannière. */}

      <div className='valeurs'> {/* Cette div englobe le contenu principal de la page "À propos". */}
        <Collapse title="Fiabilité"> {/* Utilise le composant Collapse pour créer une section rétractable avec le titre "Fiabilité". Lorsque le titre est cliqué, le contenu de la section est affiché ou masqué. */}
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </Collapse>
        <Collapse title="Respect"> {/* Utilise le composant Collapse pour créer une section rétractable avec le titre "Respect". */}
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </Collapse>
        <Collapse title="Service"> {/* Utilise le composant Collapse pour créer une section rétractable avec le titre "Service". */}
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </Collapse>
        <Collapse title="Sécurité"> {/* Utilise le composant Collapse pour créer une section rétractable avec le titre "Sécurité". */}
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </Collapse>
      </div>
    </>
  );
}

export default Apropos; // Exporte le composant Apropos pour qu'il puisse être utilisé ailleurs dans l'application.
