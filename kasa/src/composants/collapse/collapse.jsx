import './collapse.css';

// Import des modules nécessaires depuis React
import React, { useState } from 'react';

// Définition du composant Collapse
const Collapse = ({ title, children }) => {

    // Déclaration d'un état local "isCollapsed" à l'aide de useState, initialement défini à true
    const [isCollapsed, setIsCollapsed] = useState(true);

    // Fonction pour basculer l'état "isCollapsed" lorsque le bouton est cliqué
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };


    return (
        <div className="collapse">

<button onClick={toggleCollapse} className="collapse__button">

    {/* Titre du Collapse */}
    <span className="collapse-title">{title}</span>
    {/* Icône de la flèche */}

  <span className={`collapse__icon ${isCollapsed ? 'down' : 'up'}`}> 	
<i className="fa-solid fa-angle-down"></i></span>

</button>

 {/* Affiche le contenu (children) seulement si isCollapsed est faux */}
{!isCollapsed && <div className="collapse__content">{children}</div>} 


            
        </div>
    );
};

export default Collapse;