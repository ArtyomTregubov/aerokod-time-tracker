import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
        <div className="footer__container">
          
            <img src="./images/aerokod_logo.png" 
                 alt="логотип aerokod" 
                 className="footer__aerokod-logo" 
                 />

            <h2 className="footer__title">test assignment 2025</h2>
        </div>
    </footer>  
  );
}

export default Footer;