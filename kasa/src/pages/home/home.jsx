
import './home.css';



// Pour pré-visualisation

import Fiche from '../fiche_logement/fiche';



function Home() {
  return (
    <>

<main>
  
      <div className="banner">
        <p className="slogan">Chez vous, partout et ailleurs</p>
      </div>

      <div className="gallery">
        <div className="location">
          <p className="titre">Titre de la location</p>

        </div>
        <div className="location">
          <p className="titre">Titre de la location</p>
        </div>
        <div className="location">
          <p className="titre">Titre de la location</p>
        </div>
        <div className="location">
          <p className="titre">Titre de la location</p>
        </div>
        <div className="location">
          <p className="titre">Titre de la location</p>
        </div>
        <div className="location">
          <p className="titre">Titre de la location</p>
        </div>

      </div>
      </main>

{/* récup projet js dynamique */}
      {/* <div class="mes-projets">
				<h2>Mes Projets</h2>
				<div id="modifier3">
				</div>
			</div>
			<div id="filtres">
			</div>
			<div id="gallery" class="gallery">
			</div>
      // CONSTANTE POUR LA GALERIE DES TRAVAUX
  const gallery = document.getElementById("gallery");
 // RECUPERATION DES TRAVAUX
  const responseWorks = await fetch("http://localhost:5678/api/works");
  let works = await responseWorks.json();
  displayWorks(works);
 //FONCTION POUR RECUPERER LES TRAVAUX
  function displayWorks(works) {
    document.getElementById("gallery").innerHTML = "";

    //BOUCLE POUR LA CREATION DES VARIABLES POUR LES TRAVAUX
    for (let work of works) {
      let figure = document.createElement("figure");
      figure.setAttribute("data-categoryid", work.categoryId)
      let img = document.createElement("img");
      img.setAttribute("src", work.imageUrl);
      img.setAttribute("alt", work.title);
      figure.appendChild(img);
      let figcaption = document.createElement("figcaption");
      figcaption.innerHTML = work.title;
      figure.appendChild(figcaption);
      gallery.appendChild(figure);
    }
  } */}


    

  {/* pour prévisualisation   */}

<Fiche/>


    </>
  );
}

export default Home;