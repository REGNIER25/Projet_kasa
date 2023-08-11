// Import des modules nécessaires depuis React
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Import des données de logement à partir d'un fichier JSON
import data from "../../logements.json";

// Import du fichier CSS associé à ce composant
import './Slideshow.css';

// Définition du composant Slideshow
const Slideshow = () => {
  // Extraction de l'ID du logement à partir des paramètres d'URL à l'aide de useParams
  const { id } = useParams();

  // Recherche de l'objet logement dans le fichier JSON avec l'ID correspondant
  const item = data.find((item) => item.id === id);

  // Déclaration de l'état local "currentSlide" à l'aide de useState, initialement défini à 0
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fonction pour afficher le numéro de la photo actuelle
  const getSlideNumberText = () => {
    const currentNumber = currentSlide + 1;
    const totalNumber = item.pictures.length;
    return `${currentNumber}/${totalNumber}`;
  };

  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % item.pictures.length);
  };

  // Fonction pour passer à la diapositive précédente
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + item.pictures.length) % item.pictures.length);
  };

  return (
    <div className="slideshow-container">

      {/* Conteneur pour les diapositives */}

      <div className="slideshow-slide">
        {/* Boucle sur les images du logement pour afficher chaque diapositive */}
        {item.pictures.map((picture, index) => (
          <div
            key={index}
            className={index === currentSlide ? 'slide active' : 'slide'}
          >

            {/* Image de la diapositive */}
            <img src={picture} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      

      {/* Affichage des contrôles du carrousel uniquement s'il y a plus d'une image */}
      {item.pictures.length > 1 && (
        <div className="slideshow-controls">

          {/* Bouton pour repasser à la diapositive précédente */}
          <button className="prev" onClick={prevSlide}>
            <i className="fa-solid fa-angle-left"></i>
          </button>

          {/* Bouton pour passer à la diapositive suivante */}
          <button className="next" onClick={nextSlide}>
            <i className="fa-solid fa-angle-right"></i>
          </button>

          {/* Affichage du numéro de la photo actuelle */}
          <div className="slide-number">
            {getSlideNumberText()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Slideshow;