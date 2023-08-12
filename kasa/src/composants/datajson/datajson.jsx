import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from "../../logements.json";
const DataComponent = ({ itemId }) => {


  return (
    <div className="gallery">

      {data.map((item) => (

        <Link to={`/fiche-logements/${item.id}`} key={item.id}>
          <div className="img-titre-gallery">
            <img className="img-gallery" src={item.cover} alt={item.title} />
            <div className="filtre"></div>
            <span className="titre">{item.title}</span>
          </div>
        </Link>

      ))}
    </div>
  );
};

export default DataComponent;