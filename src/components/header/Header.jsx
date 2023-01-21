import React from "react";
import "./header.css";
import logoheader from "../../img/header-logo.png"

const Header = () => {
 return (
   <>
     <header>
       <div className="container header-container">
         <div className="header-logo-block">
           <img src={logoheader} alt="header-logo" />
         </div>
         <nav className="header-nav">
           <ul className="header-list">
             <li className="header-item">
               <a href="#" className="header-link">
                 Men
               </a>
             </li>
             <li className="header-item">
               <a href="#" className="header-link">
                 Women
               </a>
             </li>
             <li className="header-item">
               <a href="#" className="header-link">
                 Kids
               </a>
             </li>
             <li className="header-item">
               <a href="#" className="header-link">
                 Customize
               </a>
             </li>
             <li className="header-item">
               <a href="#" className="header-link">
                 Contact
               </a>
             </li>
           </ul>
         </nav>
         <div className="header-right-block">
           <a href="#" className="header-item-link"></a>
           <a href="#" className="header-item-link"></a>
           <a href="#" className="header-item-link"></a>
         </div>
       </div>
     </header>
   </>
 );
}

export default Header;