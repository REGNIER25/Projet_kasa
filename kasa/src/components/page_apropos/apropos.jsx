import './apropos.css';
import bannerapropos from './banner_apropos.png';


function Apropos() {
  return (
    <>

    <div>
    <img className="bannerapropos" src={bannerapropos} alt="Bannière A propos" />

    <div>
<ul>
  <div>
  <li>Fiabilité</li>
  <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
 régulièrement vérifiées par nos équipes.</p>
  </div>
  <div>
  <li>Respect</li>
  <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
  </div>
  <div>
  <li>Service</li>
  <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
  </div>
  <div>
  <li>Sécurité</li>
  <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
également des ateliers sur la sécurité domestique pour nos hôtes.</p>
  </div>
</ul>

    </div>


    </div>
    </>
  );
}

export default Apropos;