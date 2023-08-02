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
    etoiles.push(<li key={i} className='starrose'>★</li>);
  }
  for (let i = nbEtoiles; i < 5; i++) {
    etoiles.push(<li key={i}>★</li>);
  }

  // Retourne le contenu JSX du composant FicheLogement
  return (
    <div>
      {/* Carrousel */}
      {/* Rajouter flèche et le numéro et le nombre total de photos */}
      {/* <img src={item.pictures} alt={item.title} /> */}
      <Slideshow />

      <div>
        {/* Titre et emplacement du logement */}
        <h2>{item.title}</h2>
        <h3>{item.location}</h3>
      </div>

      {/* Tags */}
      <ul className='tag'>
        <li className='tg'>{item.tags}</li>
      </ul>

      <div>
        {/* Nom et image de l'hôte */}
        <p>{item.name}</p>
        <img className='circle' src={item.picture} alt={item.name} />
      </div>

      {/* Étoiles */}
      <ul className='stars'>
        {etoiles}
      </ul>

      <div className='valeurs'>
        {/* Description du logement */}
        <Collapse title="Description">
          <p>{item.description}</p>
        </Collapse>

        {/* Équipements du logement */}
        <Collapse title="Équipement">
          <ul className='js-expandmore'>
            <li>{item.equipments}</li>
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

// Export du composant FicheLogement pour qu'il puisse être utilisé ailleurs
export default FicheLogement;