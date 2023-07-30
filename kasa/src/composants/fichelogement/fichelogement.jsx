import React from 'react';
import { useParams } from 'react-router-dom';
import data from "../../logements.json";

const FicheLogement = () => {
  const { id } = useParams();
  const item = data.find((item) => item.id === parseInt(id, 10));

  if (!item) {console.log(data); 
    return <div className="chargement">Chargement des données ...</div>;
  }

  return (
    
    <div>
      <h2>{item.title}</h2>
      <img src={item.cover} alt={item.title} />
      <p>Rating: {item.rating}</p>
      <p>Location: {item.location}</p>
      {/* Ajoutez d'autres détails de l'élément ici */}
    </div>
  );
};

export default FicheLogement;

// const FicheLogement = () => {
  //   const { id } = useParams();
  //   const item = data.find((item) => item.id === parseInt(id, 10));
  
  //   if (!item) {
  //     return <div>Page non trouvée</div>;
  //   }
  
  //   return (
  //     <div>
  //       <h2>{item.title}</h2>
  //       <img src={item.cover} alt={item.title} />
  //       <p>Rating: {item.rating}</p>
  //       <p>Location: {item.location}</p>
  //       {/* Ajoutez d'autres détails de l'élément ici */}
  //     </div>
  //   );
  // };
  
  // export default FicheLogement;

  //8 données à récupérer:
  // pictures
  // title
  // location
  // host{name,picture}
  // tags
  // rating
  // description
  // equipments













