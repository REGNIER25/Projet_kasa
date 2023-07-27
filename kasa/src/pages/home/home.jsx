
import './home.css';

import DataComponent from '../.././composants/datajson/datajson';

import Fiche from '../fiche_logement/fiche';


function Home() {
  return (
    <>

<main>
  
      <div className="banner">
        <p className="slogan">Chez vous, partout et ailleurs</p>
      </div>

      <div className="gallery" id="gallery">
   
      

{/* const DataComponent = () => {
  return (
    <div>
      {jsonData.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <img src={item.cover} alt={item.title} />
        </div>
      ))}
    </div>
  );
}; */}
<DataComponent/>


{/* const gallery = document.getElementById("gallery"); */}
{/* 
{/* //   document.getElementById("gallery").innerHTML = ""; */}
  
{/* //   //Boucle pour la création de la galerie */}
{/* //   for (let item of items) { */}
{/* //   let location = document.createElement("div");
//   location.setAttribute("className","location");
  
//   let img = document.createElement("img");
//   img.setAttribute("src", item.cover);
//   img.setAttribute("alt", item.title);
//   location.appendChild(img);
  
//   let titre = document.createElement("p");
//   titre.innerHTML = item.title;
//   titre.setAttribute("className","titre");
//   location.appendChild(titre);
//   gallery.appendChild(location); */} 

        

      </div>
      </main>






<Fiche/>


    </>
  );
}

export default Home;