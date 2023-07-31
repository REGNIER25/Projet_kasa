import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from "../../logements.json";
import Collapse from '../../composants/collapse/collapse';
import Slideshow from '../../composants/slideshow/slideshow';
import './fiche.css';


const FicheLogement = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Trouver l'objet logement dans le fichier JSON avec l'ID correspondant
    const itemTrouve = data.find((item) => item.id === id);

    // Mettre à jour l'état du logement avec les données trouvées
    setItem(itemTrouve);
  }, [id]);

  console.log(item);

  if (!item) {
    console.log(data);
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

  return (
    <div>

      {/* carrousel */}
      {/* rajouter flèche et le numéro et le nombre total de photos */}
      <img src={item.pictures} alt={item.title} />
      <Slideshow/>



      <div>
      <h2>{item.title}</h2>
      <h3>{item.location}</h3>
      </div>

      <ul className='tag'>
       <li className='tg'>{item.tags}</li> 
        </ul>
    

<div >
      <p>{item.name}</p>
      <img className='circle' src={item.picture} alt={item.name} />
      </div>

      {/* Etoiles */}
      <ul className='stars'>
      {etoiles}
</ul>
      



      <div className='valeurs'>

      <Collapse title="Description">
      <p>{item.description}</p>
      </Collapse>

      <Collapse title="Équipement">
      <ul className = 'js-expandmore'>
      <li>{item.equipments}</li>
      </ul>
     
      </Collapse>

      </div>


    </div>
  );
};

export default FicheLogement;

























// import React,{ useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import data from "../../logements.json";


// const FicheLogement = () => {
//   useEffect(() => {
//     const { id } = useParams();
//     const item = data.find((item) => item.id === parseInt(id, 10));
//     const url = window.location.href;
//     const urlPartsArray = url.split('/').slice(3);
//     console.log(urlPartsArray);
//   }, []);




//   if (!item) {console.log(data); 
//     return <div className="chargement">{ id }</div>
    
//     ;
//   }

//   return (
    
//     <div>
//       <img src={item.pictures} alt={item.title} />
//       <h2>{item.title}</h2>
//       <p>{item.location}</p>
//       <p>{item.name}</p>
//       <p>{item.picture}</p>
//       <p>{item.tags}</p>
//       <p>{item.rating}</p>
//       <p>{item.description}</p>
//       <p>{item.equipments}</p>
      
//     </div>
//   );
// };

// export default FicheLogement;















