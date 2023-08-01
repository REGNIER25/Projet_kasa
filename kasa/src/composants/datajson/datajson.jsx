// Import des modules nécessaires depuis React
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import du fichier JSON contenant les données des logements
import data from "../../logements.json";

// Import du fichier CSS associé à ce composant
import './datajson.css';

// Définition du composant DataComponent
const DataComponent = ({ itemId }) => {
  // Déclaration de deux états locaux à l'aide de useState
  const [itemData, setItemData] = useState(null); // Pour stocker les données du logement sélectionné par itemId
  const [urlPartsArray, setUrlPartsArray] = useState([]); // Pour stocker les parties de l'URL de la page actuelle

  // Effet de côté pour récupérer les données du logement en fonction de l'ID passé (itemId)
  useEffect(() => {
    const item = data.find((item) => item.id === itemId);
    setItemData(item);
  }, [itemId]);

  // Effet de côté pour extraire les parties de l'URL de la page actuelle
  useEffect(() => {
    const url = window.location.href;
    const parts = url.split('/').slice(3);
    setUrlPartsArray(parts);
  }, []);

  // Retourne le contenu JSX du composant DataComponent
  return (
    <div className="gallery">
      {/* Boucle sur les données pour afficher chaque logement dans la galerie */}
      {data.map((item) => (
        <Link to={`/fiche-logements/${item.id}`} key={item.id}>
          {/* Lien vers la fiche individuelle du logement */}
          <div className="img-titre-gallery">
            {/* Image du logement */}
            <img className="img-gallery" src={item.cover} alt={item.title} />
            {/* Titre du logement */}
            <span className="titre">{item.title}</span>
          </div>
          {/* Affichage des parties de l'URL de la page actuelle */}
          <p>{urlPartsArray.join('/')}</p>
        </Link>
      ))}
    </div>
  );
};

// Export du composant DataComponent pour qu'il puisse être utilisé ailleurs
export default DataComponent;