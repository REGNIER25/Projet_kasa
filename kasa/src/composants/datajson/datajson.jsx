// version sans le titre de l'ensemble

import React, { useState, useEffect } from 'react';

const DataComponent = ({ itemId }) => {
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    // URL du fichier JSON ou de l'API à partir de laquelle vous souhaitez récupérer les données
    const url = 'https://exemple.com/chemin/vers/data.json';

    // Utilisez fetch pour récupérer les données JSON
    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        // Si le JSON est directement un tableau, vous pouvez utiliser la méthode find directement
        const item = jsonData.find((item) => item.id === itemId);
        setItemData(item);
      })
      .catch((error) => console.error('Erreur lors de la récupération des données :', error));
  }, [itemId]);

  if (!itemData) {
    return <div>Loading...</div>;
  }

  // Utilisez les données récupérées pour afficher ou manipuler les informations
  return (
    <div>
      <h1>Informations de l'item :</h1>
      <p>Titre : {itemData.title}</p>
      <img src={itemData.cover} alt={itemData.title} />
    </div>
  );
};

export default DataComponent;


// import React, { useState, useEffect } from 'react';

// const DataComponent = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // URL du fichier JSON ou de l'API à partir de laquelle vous souhaitez récupérer les données
//     const url = './././logements.json';

//     // Utilisez fetch pour récupérer les données JSON
//     fetch(url)
//       .then((response) => response.json())
//       .then((jsonData) => setData(jsonData))
//       .catch((error) => console.error('Erreur lors de la récupération des données :', error));
//   }, []);

//   if (!data) {
//     return <div>Loading...

// <div className="gallery">
   


//         <div className="location">
//           <p className="titre">Titre de la location</p>
//           "id": "c67ab8a7",
// 		"title": "Appartement cosy",
// 		"cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",

//         </div>
//         <div className="location">
//           <p className="titre">Titre de la location</p>
//         </div>
//         <div className="location">
//           <p className="titre">Titre de la location</p>
//         </div>
//         <div className="location">
//           <p className="titre">Titre de la location</p>
//         </div>
//         <div className="location">
//           <p className="titre">Titre de la location</p>
//         </div>
//         <div className="location">
//           <p className="titre">Titre de la location</p>
//         </div>

//       </div>

//     </div>;
//   }

//   // Utilisez les données JSON récupérées pour afficher ou manipuler les informations
//   return (
//     <div>
// {/* <img src = {cover} alt={title}/>
// <p>{title}</p> */}


//       <h1>Données récupérées :</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>



//   );
// };

// export default DataComponent;

// {/* récup projet js dynamique */}
//       {/* <div class="mes-projets">
// 				<h2>Mes Projets</h2>
// 				<div id="modifier3">
// 				</div>
// 			</div>
// 			<div id="filtres">
// 			</div>
// 			<div id="gallery" class="gallery">
// 			</div>
//       // CONSTANTE POUR LA GALERIE DES TRAVAUX
//   const gallery = document.getElementById("gallery");
//  // RECUPERATION DES TRAVAUX
//   const responseWorks = await fetch("http://localhost:5678/api/works");
//   let works = await responseWorks.json();
//   displayWorks(works);
//  //FONCTION POUR RECUPERER LES TRAVAUX
//   function displayWorks(works) {
//     document.getElementById("gallery").innerHTML = "";

//     //BOUCLE POUR LA CREATION DES VARIABLES POUR LES TRAVAUX
//     for (let work of works) {
//       let figure = document.createElement("figure");
//       figure.setAttribute("data-categoryid", work.categoryId)
//       let img = document.createElement("img");
//       img.setAttribute("src", work.imageUrl);
//       img.setAttribute("alt", work.title);
//       figure.appendChild(img);
//       let figcaption = document.createElement("figcaption");
//       figcaption.innerHTML = work.title;
//       figure.appendChild(figcaption);
//       gallery.appendChild(figure);
//     }
//   } */}
