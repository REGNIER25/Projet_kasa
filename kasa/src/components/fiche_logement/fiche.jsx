import './fiche.css';
import Header from '../header/header';
import Footer from '../footer/footer';

import imagelocation from './carrousel_fiche.png';


function Fiche() {
  return (
    <>
<Header/>

    {/* Première colonne */}
    <div>
    <img src={imagelocation} alt="Image location" />

    <div>

    <div>
      <h2>Cozy loft on the Canal Saint-Martin</h2>
<h3>Paris, Île-de-France</h3>
    </div>

    <div>
<div>Cozy</div>
<div>Canal</div>
<div>Paris 10</div>


    </div>

    </div>

{/* Deuxième colonne */}
    <div>

    <div>
<p>Alexandre Dumas</p>
<span>cercle à faire en sass/css</span>
    </div>

    <div>
<ul>
<li>★</li>
<li>★</li>
<li>★</li>
<li>★</li>
<li>★</li>

</ul>
    </div>

    </div>

    <div>
    <ul>
  <div>
  <li>Description</li>
  <p>Vous serez à 50m du canal Saint-Martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. 
    Au cœur de Paris avec 5 lignes de métro et de nombreux bus. 
    Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. 
    Vous êtes à1 station de la gare de l'est (7 minutes à pied). </p>
  </div>
  <div>
  <li>Équipement</li>
  <ul>
    <li>Climatisation</li>
    <li>Wi-Fi</li>
    <li>Cuisine</li>
    <li>Espace de travail</li>
    <li>Fer à repasser</li>
    <li>Sèche-cheveux</li>
    <li>Cintres</li>
</ul>
  </div>
</ul>


    </div>


   
  

    </div>
    <Footer/>
    </>
  );
}

export default Fiche;