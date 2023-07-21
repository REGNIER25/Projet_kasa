import './fiche.css';

import imagelocation from '../../img/carrousel_fiche.png';



function Fiche() {
  return (
    
    <>

    {/* Première colonne */}
    <div>
    <img src={imagelocation} alt="Image location" />

    <div>

    <div>
      <h2>Cozy loft on the Canal Saint-Martin</h2>
<h3>Paris, Île-de-France</h3>
    </div>

    <div>
      <ul className='tag'>
<li className='tg'>Cozy</li>
<li className='tg'>Canal</li>
<li className='tg'>Paris 10</li>
</ul>


    </div>

    </div>

{/* Deuxième colonne */}
<div className='colonne_fiche'>

    <div>
<p>Alexandre Dumas</p>
<span className='circle'>cercle</span>
    </div>

    <div>
<ul className='stars'>
<li className='starrose'>★</li>
<li className='starrose'>★</li>
<li className='starrose'>★</li>
<li>★</li>
<li>★</li>

</ul>
    </div>

    </div>

    <div className='details'>
    
  <div className='detail_description'>

  <li className ='js-expandmore-title'>Description ⌃</li>
  <p className = 'js-expandmore'>Vous serez à 50m du canal Saint-Martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. 
    Au cœur de Paris avec 5 lignes de métro et de nombreux bus. 
    Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. 
    Vous êtes à1 station de la gare de l'est (7 minutes à pied). </p>
  </div>
  <div className='detail_equipement'>
  <li className ='js-expandmore-title'>Équipement ⌃</li>
  <ul className = 'js-expandmore'>
    <li>Climatisation</li>
    <li>Wi-Fi</li>
    <li>Cuisine</li>
    <li>Espace de travail</li>
    <li>Fer à repasser</li>
    <li>Sèche-cheveux</li>
    <li>Cintres</li>
</ul>
  </div>



    </div>


   
  

    </div>

    
    </>
  );
}

export default Fiche;