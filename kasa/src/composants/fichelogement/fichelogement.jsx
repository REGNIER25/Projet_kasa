// Import des modules nécessaires depuis React
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Import des données de logement à partir d'un fichier JSON
import data from "../../logements.json";

// Import du composant Collapse personnalisé
import Collapse from '../../composants/collapse/collapse';

// Import du composant Slideshow personnalisé
import Slideshow from '../../composants/slideshow/slideshow';

// Import du fichier CSS associé à ce composant
import './fiche.css';

// Définition du composant FicheLogement
const FicheLogement = () => {
  // Extraction de l'ID du logement à partir des paramètres d'URL à l'aide de useParams
  const { id } = useParams();
console.log(id);
  // Déclaration de l'état local "item" à l'aide de useState, initialement défini à null
  const [item, setItem] = useState(null);

  // Effet de bord pour récupérer les données du logement en fonction de l'ID passé (id)
  useEffect(() => {
    // Trouver l'objet logement dans le fichier JSON avec l'ID correspondant
    const itemTrouve = data.find((item) => item.id === id);

    // Mettre à jour l'état du logement avec les données trouvées
    setItem(itemTrouve);
  }, [id]);

  // Si les données du logement ne sont pas encore chargées, afficher un message de chargement
  if (!item) {
    return <div className="chargement">{id}</div>;
  }

  // Générer les étoiles en fonction du nombre de rating
  const nbEtoiles = Math.min(Math.round(item.rating), 5);
  const etoiles = [];
  for (let i = 0; i < nbEtoiles; i++) {
    etoiles.push(<div key={i} className='starrose'>★</div>);
  }
  for (let i = nbEtoiles; i < 5; i++) {
    etoiles.push(<div key={i}>★</div>);
  }

  // Retourne le contenu JSX du composant FicheLogement
  return (
    <div>
      {/* Carrousel */}
      {/* Rajouter flèche et le numéro et le nombre total de photos */}
    
      <Slideshow />

     <div className='titre-hote'> 
      <div>
        {/* Titre et emplacement du logement */}
        <h2>{item.title}</h2>
        <h3>{item.location}</h3>
      </div>

      <div className ='hote'>
        {/* Nom et image de l'hôte */}
        <div>
        <p>{item.host.name}</p>
        </div>
        <div>
        <img className='circle' src={item.host.picture} alt={item.host.name} />
        </div>
      </div>
      </div>

      <div className='tags-stars'>

      {/* Tags */}

      <div>
    
{item.tags.map((tag, index) => (
  <div key={index} className='tag'>{tag}</div>
))}

</div>
    
      {/* Étoiles */}
      <div className='stars'>
      <div className='star'>
        {etoiles}
      </div>
      </div>


      </div>

  


      {/* Collapses */}


        {/* Conteneur pour les collapses */}
    <div className="collapses-container">
      {/* Description du logement */}
      <div className='description-equipements'>
        <Collapse className='titre-collapse' title="Description">
          <p>{item.description}</p>
        </Collapse>
      </div>

      {/* Équipements du logement */}
      <div className='description-equipements'>
        <Collapse className='titre-collapse' title="Équipement">
          <ul className='liste-equipements'>
            {item.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  </div>
);
};

export default FicheLogement;