
import './home.css';

import Header from '../../composants/header/header';
import Footer from '../../composants/footer/footer';

// Pour pré-visualisation

import Fiche from '../fiche_logement/fiche';
import Apropos from '../page_apropos/apropos';
import Erreur from '../page_erreur/erreur';



function Home() {
  return (
    <>
<Header/>
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
    
    <Footer/>

  {/* pour prévisualisation   */}

<Fiche/>

<Apropos/>
<Erreur/>

    </>
  );
}

export default Home;