import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from '././pages/home/home';
import Erreur from '././pages/page_erreur/erreur';
import Fiche from '././pages/fiche_logement/fiche';
import Apropos from '././pages/page_apropos/apropos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <App /> */}
    <Router>
  <Routes>

<Route path='/' element={<Home />}/>

<Route path='/' element={<Fiche />}/>
<Route path='/' element={<Apropos />}/>

<Route path='/' element={<Erreur />}/>

{/* <Route path='/home' element={<Home />}/>
<Route path='/erreur' element={<Erreur />}/>
<Route path='/fiche' element={<Fiche />}/>
<Route path='/apropos' element={<Apropos />}/> */}
    

    </Routes>
</Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
