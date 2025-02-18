import React from "react";

export default function Header({onAddTask}) {
  return (

    <header className="header">
        <div className="header__container">
           <div className="header__logo-container">
            <span className="header__logo-text">Time tracker for</span>
            
            <img src="./images/aerokod_logo.png" 
                 alt="логотип aerокод" 
                 className="header__logo"/>
                 
           </div> 

           <div className="header__button-container">
            <span className="header__button-text">Add task</span>
            <button 
              className="header__add-button" 
              onClick={onAddTask}>
              +
            </button>
           </div>
        </div>
    </header>
    
  );
}
