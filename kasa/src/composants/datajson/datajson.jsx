import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from "../../logements.json";

const splitTitle = (title) => {
  const words = title.split(' ');
  const halfLength = Math.ceil(words.length / 2);
  const firstHalf = words.slice(0, halfLength).join(' ');
  const secondHalf = words.slice(halfLength).join(' ');
  return [firstHalf, secondHalf];
};
const DataComponent = ({ itemId }) => {


  return (
    <div className="gallery">

      {data.map((item) => (

        <Link to={`/fiche-logements/${item.id}`} key={item.id}>
          <div className="img-titre-gallery">
            <img className="img-gallery" src={item.cover} alt={item.title} />
            <div className="filtre"></div>
            <div className="titre">
              <div>{splitTitle(item.title)[0]}</div>
              <div>{splitTitle(item.title)[1]}</div>
            </div>

          </div>
        </Link>

      ))}
    </div>
  );
};

export default DataComponent;