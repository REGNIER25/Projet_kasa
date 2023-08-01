import React from 'react'; // Importe le module React pour utiliser les fonctionnalités de React dans le fichier.
import ReactDOM from 'react-dom/client'; // Importe le module ReactDOM pour interagir avec le DOM (Document Object Model) et rendre les composants React dans l'application.
import './index.css'; // Importe les styles CSS globaux pour l'application. Ces styles seront appliqués sur toutes les pages de l'application.
// import App from './App'; // Importe le composant App, mais il est actuellement en commentaire et n'est pas utilisé dans le code.
import reportWebVitals from './reportWebVitals'; // Importe le module reportWebVitals qui permet de mesurer les performances de l'application et de signaler les résultats au serveur de collecte d'analyses.

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; // Importe les composants BrowserRouter, Routes et Route du module react-router-dom. Ces composants sont utilisés pour gérer la navigation et les routes de l'application.

import Header from '././composants/header/header'; // Importe le composant Header qui représente le header de l'application.
import Footer from '././composants/footer/footer'; // Importe le composant Footer qui représente le footer de l'application.
import Home from '././pages/home/home'; // Importe le composant Home qui représente la page d'accueil de l'application.
import Erreur from '././pages/page_erreur/erreur'; // Importe le composant Erreur qui représente la page d'erreur "404 Not Found" de l'application.
import Apropos from '././pages/page_apropos/apropos'; // Importe le composant Apropos qui représente la page "À propos" de l'application.
import FicheLogement from '././composants/fichelogement/fichelogement'; // Importe le composant FicheLogement qui représente la page de détails d'un logement de l'application.

const root = ReactDOM.createRoot(document.getElementById('root')); // Crée un point d'entrée de rendu dans l'application React. Cela permet de définir où les composants React seront rendus dans le DOM. Dans ce cas, le point d'entrée est l'élément avec l'ID "root" dans le document HTML.

root.render(
  <React.StrictMode> {/* Utilise le point d'entrée de rendu (root) pour rendre les composants React dans le DOM. La méthode render prend en argument l'élément racine de l'application à rendre. Dans ce cas, l'élément racine est entouré de <React.StrictMode> pour activer le mode strict de React. */}
    <Router> {/* Le composant Router de react-router-dom est utilisé pour envelopper toute l'application, permettant ainsi la gestion de la navigation. */}
      <Header/> {/* Rend le composant Header, qui affiche le header de l'application. Le header contient généralement la barre de navigation. */}

      <Routes> {/* Utilise le composant Routes pour définir les routes de l'application. */}
        <Route path='/' element={<Home />}/> {/* Définit la route pour la page d'accueil. Lorsque l'URL correspond à "/", le composant Home est rendu. */}
        <Route path="/fiche-logements/:id" element={<FicheLogement />}> {/* Définit la route pour les fiches de logement. Lorsque l'URL correspond à "/fiche-logements/:id" (où ":id" est un paramètre dynamique), le composant FicheLogement est rendu. */}
        </Route>
        <Route path='/a-propos' element={<Apropos />}/> {/* Définit la route pour la page "À propos". Lorsque l'URL correspond à "/a-propos", le composant Apropos est rendu. */}
        <Route path= "*" element={<Erreur />}/> {/* Définit une route par défaut pour gérer toutes les autres URL qui ne correspondent à aucune des routes précédentes. Lorsque l'URL ne correspond à aucune des routes définies, le composant Erreur est rendu, indiquant une erreur de type "Page not found" (404). */}
      </Routes>

      <Footer/> {/* Rend le composant Footer, qui affiche le footer de l'application. */}
    </Router>
  </React.StrictMode>
);

reportWebVitals(); // Appelle la fonction reportWebVitals() pour mesurer les performances de l'application et envoyer les résultats au serveur de collecte d'analyses.