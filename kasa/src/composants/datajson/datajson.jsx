import React, { useState, useEffect } from 'react';
import data from "../../logements.json";
import './datajson.css';


const DataComponent = ({ itemId }) => {
  const [itemData, setItemData] = useState(null);
  useEffect(() => {
console.log(data); 
    const item = data.find((item) => item.id === itemId);
    setItemData(item);
  }, [itemId]);


  return (
      <div>
        {data.map((item) => (
          <a href="http://localhost:3000/fiche-logements/b9123946" key={item.id}>
            <img  className = "img-gallery" src={item.cover} alt={item.title} />
            <p className = "titre">{item.title}</p></a>
  
        ))}
      </div>
    );
}

  export default DataComponent;

  