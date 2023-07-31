import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
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
import FicheLogement from '././composants/fichelogement/fichelogement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <App /> */}
    <Router>

<Header/>

  <Routes>

<Route path='/' element={<Home />}/>


        <Route path="/fiche-logements/:id" element={<FicheLogement />}>
          
        </Route>
      

<Route path='/a-propos' element={<Apropos />}/>

<Route path= "*" element={<Erreur />}/>
    

    </Routes>

    <Footer/>
</Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
