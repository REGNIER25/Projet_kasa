import './collapse.css';

import React, { useState } from 'react';

const Collapse = ({ title, children }) => {

    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };




    return (



        <div className="collapse">

            <button onClick={toggleCollapse} className="collapse__button">


                <span className="collapse-title">{title}</span>


                <span className={`collapse__icon ${isCollapsed ? 'down' : 'up'}`}>
                    <i className="fa-solid fa-angle-down"></i></span>

            </button>

            {!isCollapsed && <div className="collapse__content collapse__content-animate">{children}</div>}







        </div>
    );
};

export default Collapse;