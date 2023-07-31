import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from "../../logements.json";
import './datajson.css';

const DataComponent = ({ itemId }) => {
  const [itemData, setItemData] = useState(null);
  const [urlPartsArray, setUrlPartsArray] = useState([]);

  useEffect(() => {
    console.log(data);
    const item = data.find((item) => item.id === itemId);
    setItemData(item);
  }, [itemId]);

  useEffect(() => {
    const url = window.location.href;
    const parts = url.split('/').slice(3);
    setUrlPartsArray(parts);
  }, []);

  return (
    <div>
      {data.map((item) => (
        <Link to={`/fiche-logements/${item.id}`} key={item.id}>
          <img className="img-gallery" src={item.cover} alt={item.title} />
          <p className="titre">{item.title}</p>
          <p>{urlPartsArray.join('/')}</p>
        </Link>
      ))}
    </div>
  );
};

export default DataComponent;



// import React, { useState, useEffect } from 'react';
// import data from "../../logements.json";
// import './datajson.css';


// const DataComponent = ({ itemId }) => {
//   const [itemData, setItemData] = useState(null);
//   useEffect(() => {
// console.log(data); 
//     const item = data.find((item) => item.id === itemId);
//     setItemData(item);
//   }, [itemId]);

//   useEffect(() => {
//     const url = window.location.href;
//     const urlPartsArray = url.split('/').slice(3);
//     console.log(urlPartsArray);
//   }, []);

//   return (
//       <div>
//         {data.map((item) => (
//           <a href="http://localhost:3000/fiche-logements/:id" key={item.id}>
//             <img  className = "img-gallery" src={item.cover} alt={item.title} />
//             <p className = "titre">{item.title}</p>
//             <p>{url}</p>
//             </a>
            
  
//         ))}
//       </div>
//     );
// }

//   export default DataComponent;

  