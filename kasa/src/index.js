import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from '././composants/header/header';
import Footer from '././composants/footer/footer';
import Home from '././pages/home/home';
import Erreur from '././pages/page_erreur/erreur';
import Apropos from '././pages/page_apropos/apropos';
import FicheLogement from '././pages/fichelogement/fichelogement';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Router>
      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path="/fiche-logements/:id" element={<FicheLogement />} />
        <Route path='/a-propos' element={<Apropos />} />
        <Route path="*" element={<Erreur />} />
      </Routes>

      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals(); 
