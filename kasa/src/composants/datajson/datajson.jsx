//récup id dynamiquement

import React, { useState, useEffect } from 'react';
import './datajson.css';

const DataComponent = ({ itemId }) => {
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    const url = 'http://localhost:3000/logements';

  
    fetch(url)
      .then((response) => response.json()) 

      .then((jsonData) => {
        const item = jsonData.find((item) => item.id === itemId);
        setItemData(item);
      })


      .catch((error) => console.error('Erreur lors de la récupération des données :', error));
  }, [itemId]);

  if (!itemData) {
    return <div className="chargement">Chargement des données ...</div>;
  }

  return (
    <div className="location">
      <img src={itemData.cover} alt={itemData.title} />
      <p className="titre">{itemData.title}</p>
    </div>
  );
};

export default DataComponent;


// import './datajson.css';

// import React, { useState, useEffect } from 'react';

// const DataComponent = ({itemId}) => {
// const [itemData, setItemData] = useState(null);

//   useEffect(() => {

//     //  // RECUPERATION DES TRAVAUX
//     const responseItems = fetch("http://localhost:3000/logements");

//     let items = responseItems.json();

// //   displayWorks(works);
// // URL du fichier JSON partir pour récupérer les données
//     // const url = 'https://exemple.com/chemin/vers/data.json';
//     const url = "http://localhost:3000/src/logements.json";

// // Récupération des données JSON
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

//   //constante gallery
//   const gallery = document.getElementById("gallery");

//   document.getElementById("gallery").innerHTML = "";
  
//   //Boucle pour la création de la galerie
//   for (let item of items) {
//   let location = document.createElement("div");
//   location.setAttribute("className","location");
  
//   let img = document.createElement("img");
//   img.setAttribute("src", item.cover);
//   img.setAttribute("alt", item.title);
//   location.appendChild(img);
  
//   let titre = document.createElement("p");
//   titre.innerHTML = item.title;
//   titre.setAttribute("className","titre");
//   location.appendChild(titre);
//   gallery.appendChild(location);

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






