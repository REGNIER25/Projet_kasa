// Import du fichier CSS associé à ce composant
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

    // Retourne le contenu JSX du composant Collapse
    return (
        <div className="collapse">
            {/* Bouton pour déclencher l'effet de repli/dépli */}
            <button onClick={toggleCollapse} className="collapse__button">
                {/* Titre du Collapse */}
                <span className="collapse__title">{title}</span>
                {/* Icône qui change en fonction de l'état isCollapsed */}
                <span className={`collapse__icon ${isCollapsed ? 'down' : 'up'}`}> 	Ʌ</span>
            </button>
            {/* Affiche le contenu (children) seulement si isCollapsed est faux */}
            {!isCollapsed && <div className="collapse__content">{children}</div>}
        </div>
    );
};

// Export du composant Collapse pour qu'il puisse être utilisé ailleurs
export default Collapse;