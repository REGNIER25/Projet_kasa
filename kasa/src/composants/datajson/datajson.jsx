// Import des modules nécessaires depuis React
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import du fichier JSON contenant les données des logements
import data from "../../logements.json";

import './datajson.css';

// Définition du composant DataComponent
const DataComponent = ({ itemId }) => {
  

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
  
        </Link>
      ))}
    </div>
  );
};

export default DataComponent;