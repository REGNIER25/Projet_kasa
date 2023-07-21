
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
    

  {/* pour prévisualisation   */}

<Fiche/>


    </>
  );
}

export default Home;