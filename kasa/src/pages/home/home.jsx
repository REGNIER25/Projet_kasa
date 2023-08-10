import './home.css'; 

import DataComponent from '../.././composants/datajson/datajson'; // Importe le composant DataComponent depuis le chemin spécifié

function Home() {
  return (
    <> {/* C'est une syntaxe de fragment, utilisée pour englober plusieurs éléments JSX sans créer d'élément DOM supplémentaire */}
      <div className="banner">

        <p className="slogan">Chez vous, partout et ailleurs</p> 

      </div>


{/* composant galerie des logements*/}
      <DataComponent /> 
  
      
    </>
  );
}

export default Home; 

