
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
        <span className="collapse__title">{title}</span>
          <span className={`collapse__icon ${isCollapsed ? 'down' : 'up'}`}> 	Ʌ</span>
        </button>
        {!isCollapsed && <div className="collapse__content">{children}</div>}
      </div>
    );
  };
  
  export default Collapse;
 

 

  




  
     