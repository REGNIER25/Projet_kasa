import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from "../../logements.json";
import './Slideshow.css';

const Slideshow = () => {
  const { id } = useParams();
  const item = data.find((item) => item.id === id);

  const [currentSlide, setCurrentSlide] = useState(0);

  if (!item || !item.pictures || item.pictures.length === 0) {
    return <div>Chargement...</div>;
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % item.pictures.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + item.pictures.length) % item.pictures.length);
  };

  return (
    <div className="slideshow-container">
      <div className="slideshow-slide">
        {item.pictures.map((picture, index) => (
          <div
            key={index}
            className={index === currentSlide ? 'slide active' : 'slide'}
          >
            <img src={picture} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      {item.pictures.length > 1 && (
        <div className="slideshow-controls">
          <button className="prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="next" onClick={nextSlide}>
            &#10095;
          </button>
          <div className="dots">
            {item.pictures.map((_, index) => (
              <span
                key={index}
                className={index === currentSlide ? 'dot active' : 'dot'}
              ></span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Slideshow;