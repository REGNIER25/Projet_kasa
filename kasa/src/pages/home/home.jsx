import './home.css'; // Importe les styles CSS spécifiques pour la page d'accueil

import DataComponent from '../.././composants/datajson/datajson'; // Importe le composant DataComponent depuis le chemin spécifié

function Home() {
  return (
    <> {/* C'est une syntaxe de fragment, utilisée pour englober plusieurs éléments JSX sans créer d'élément DOM supplémentaire */}
      <div className="banner">
        <p className="slogan">Chez vous, partout et ailleurs</p> {/* Affiche le slogan "Chez vous, partout et ailleurs" dans une div avec la classe CSS "banner" */}
      </div>

      <DataComponent /> {/* Rend le composant DataComponent qui doit afficher des données de logement */}

    </>
  );
}

export default Home; // Exporte le composant Home pour qu'il puisse être utilisé ailleurs dans l'application
