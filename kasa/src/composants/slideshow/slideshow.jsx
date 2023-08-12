import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from "../../logements.json";
import './Slideshow.css';

const Slideshow = () => {

  const { id } = useParams();


  const item = data.find((item) => item.id === id);


  const [currentSlide, setCurrentSlide] = useState(0);


  const getSlideNumberText = () => {
    const currentNumber = currentSlide + 1;
    const totalNumber = item.pictures.length;
    return `${currentNumber}/${totalNumber}`;
  };


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
            <i className="fa-solid fa-angle-left"></i>
          </button>


          <button className="next" onClick={nextSlide}>
            <i className="fa-solid fa-angle-right"></i>
          </button>


          <div className="slide-number">
            {getSlideNumberText()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Slideshow;