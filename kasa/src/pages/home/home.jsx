
import './home.css';

import DataComponent from '../.././composants/datajson/datajson';

import Fiche from '../fiche_logement/fiche';
import FicheLogement from '../.././composants/fichelogement/fichelogement'



function Home() {
  return (
    <>

  
      <div className="banner">
        <p className="slogan">Chez vous, partout et ailleurs</p>
      </div>

      <div className="gallery" id="gallery">

      <DataComponent/>
</div>

<Fiche/>


    </>


  );
}

export default Home;
   
      

