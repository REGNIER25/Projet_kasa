import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from "../../logements.json";
import Collapse from '../../composants/collapse/collapse';
import Slideshow from '../../composants/slideshow/slideshow';
import './fiche.css';
import Erreur from '../page_erreur/erreur';


const FicheLogement = () => {
  const { id } = useParams();
  console.log(id);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const itemTrouve = data.find((item) => item.id === id);

    setItem(itemTrouve);
  }, [id]);

  if (!item) {console.log ("Cette location n'existe pas.");
    return <div>{<Erreur />}</div>;
  }



  const [firstName, lastName] = item.host.name.split(' ');

  const nbEtoiles = Math.min(Math.round(item.rating), 5);
  const etoiles = [];
  for (let i = 0; i < nbEtoiles; i++) {
    etoiles.push(<div key={i} className='starrose'>★</div>);
  }
  for (let i = nbEtoiles; i < 5; i++) {
    etoiles.push(<div key={i}>★</div>);
  }

  return (
    <div className='fiche'>

      <Slideshow />

      <div className='titre-hote'>
        <div>
          <h2>{item.title}</h2>
          <h3>{item.location}</h3>
        </div>



        <div className='hote'>

          <div className='hote-name'>
            <p className='prenom'>{firstName}</p>
            <p>{lastName}</p>
          </div>

          <div>
            <img className='circle' src={item.host.picture} alt={item.host.name} />
          </div>
        </div>

      </div>

      <div className='tags-stars'>


        <div className='ligne-tags'>

          {item.tags.map((tag, index) => (
            <div key={index} className='tag'>{tag}</div>
          ))}

        </div>


        <div className='stars'>
          <div className='star'>
            {etoiles}
          </div>
        </div>


        <div className='hote-mobile'>

          <div className='hote-name'>
            <p className='prenom'>{firstName}</p>
            <p>{lastName}</p>
          </div>
          <div>
            <img className='circle' src={item.host.picture} alt={item.host.name} />
          </div>
        </div>


      </div>



      <div className="collapses-container">

        <div className='description-equipements'>

          <Collapse className='titre-collapse' title="Description">
            <p>{item.description}</p>
          </Collapse>
        </div>


        <div className='description-equipements'>

          <Collapse className='titre-collapse' title="Équipement">
            <ul className='liste-equipements'>
              {item.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>

        </div>
      </div>

    </div>
  );
};

export default FicheLogement;