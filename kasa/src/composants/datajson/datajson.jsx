//récup id dynamiquement


import React, { useState, useEffect } from 'react';

import './datajson.css';

// Importez les données directement depuis le fichier JSON
// Récupération des données JSON
import data from "../../logements.json";


const DataComponent = ({ itemId }) => {
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
console.log(data); 

    // Simulation de la récupération de données depuis le serveur
    const item = data.find((item) => item.id === itemId);
    setItemData(item);
  }, [itemId]);


  return (
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <img src={item.cover} alt={item.title} />
          </div>
        ))}
      </div>
    );
  

  
  if (!itemData) {
    return <div className="chargement">Chargement des données ...</div>;
    
  }}
  //cover;titre = props

  // return (
  //   <div>
  //     {/* Vous pouvez maintenant utiliser "itemData" ici comme avant */}
  //     {itemData && (
  //     //   <div>
  //     //     <h1>{itemData.title}</h1>
  //     //     <p>{itemData.description}</p>
      //     {/* Ajoutez d'autres éléments pour afficher d'autres propriétés de "itemData" */}
      //   </div>
      //   <div className="location">
      //   <a href="http://localhost:3000/fiche-logements/1"><img src={itemData.cover} alt={itemData.title} />
      //   <p className="titre">{itemData.title}</p></a>
      // </div>
      // )}
    // </div>
  // );
// };

export default DataComponent;




  



// import React, { useState, useEffect } from 'react';

// const DataComponent = ({itemId}) => {
// const [itemData, setItemData] = useState(null);

//   useEffect(() => {

//     //  // RECUPERATION DES TRAVAUX
//     const responseItems = fetch("http://localhost:3000/logements");

//     let items = responseItems.json();

// //   displayWorks(works);
// // URL du fichier JSON partir pour récupérer les données



//     fetch(url)



//       .then((response) => response.json())

//       .then((jsonData) => {

//   // Si le JSON est directement un tableau, vous pouvez utiliser la méthode find directement
//         const item = jsonData.find((item) => item.id === itemId);
//         setItemData(item);
//       })

//       .catch((error) => console.error('Erreur lors de la récupération des données :', error));
//   }, [itemId]);

// //   <div className="location">
// // <p className="titre">Titre de la location</p>
// // "id": "c67ab8a7",
// // "title": "Appartement cosy",
// // "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",

// // </div>

//   if (!itemData) {
//     return <div className ="chargement">Chargement des données ...</div>;
    
//   }

//   // Fonction pour récupérer les données
// function displayItems(items) {

//   

//    // Traitement des données
//    return (
//     <div className="location">
//       <img src={item.cover} alt={item.title} />
//       <p className="titre">{item.title}</p>
//     </div>

//   );

// }}
 
// };


// export default DataComponent;






