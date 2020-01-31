import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import close from "../052-close.svg";


const styles = {
  nav: {
        backgroundColor:"transparent",
        minHeight:'60px'
  },
  logo: {
    minHeight:'60px'
},

  header: {
    fontSize: "calc(10px + 2vmin)",
    color: "white"
  },
  color: {
    background: "red"
  },
  menu: {
    display: "none"
  },
  navbaritem:{
    color:"white"
  },
  menuOverlay:{
    left:"0",
    top:"0",
    position: "absolute",
    width:"100vw",
    height: "100vh",
    backgroundColor: 'rgba(0,0,0,0.4)'

  }

};

 const menuOverlay = () => {
  const menu = document.querySelector(".menuOverlay");
  const enlacesMenu = document.querySelectorAll(".animacion");
  if (menu.classList.contains('close')){
    menu.classList.remove('close');
    menu.classList.add('open');
   
    enlacesMenu.forEach(function (enlace, index) {
     enlace.classList.add('llegada');
    }); 
  } else
    {
      menu.classList.remove('open');
      enlacesMenu.forEach(function (enlace, index) {
        enlace.classList.remove('llegada');
       }); 
      menu.classList.add('close');
    }
};



const Header = () => (

  
    <div>

<div className="menuOverlay close">
  <div className="container">
    <div className="section">
      <div className="columns">
        <div className="column">
          <Link className="link-item animacion" onClick={menuOverlay} to="/">Home</Link>
          <Link className="link-item animacion"  onClick={menuOverlay} to="/about">About</Link>
          <Link className="link-item animacion"  onClick={menuOverlay} to="/users">Users</Link>
          <Link className="link-item animacion" onClick={menuOverlay} to="/works">Works</Link>
          <Link className="link-item animacion" onClick={menuOverlay} to="/contact">Contact</Link>
        </div>
        <div className="column">
        <div className="link-item" onClick={menuOverlay}> <img className="iconClose" src={close} height="24" width="24"/></div>
        </div>
      </div>
      </div>
    </div>
</div>


<nav className="navbar" style={styles.nav} role="navigation" aria-label="main navigation">
      



      <div className="navbar-brand">
            <a className="navbar-item" href="/">
            <img src={logo} style={styles.logo} />
            </a>     
      </div>
      
    
        
        <div className="navbar-start">
         <div className="navbar-item" onClick={menuOverlay}>mostar menu</div>
        </div>
        </nav> 


  
    
    
    
    
    </div>
);

export default Header;
