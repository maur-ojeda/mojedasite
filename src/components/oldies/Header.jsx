import React, { Component } from "react";
import logo from "../logo.svg";
//componenetes super portables, no keyframes  ni !important
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

export default class Header extends Component {
  
  menuOverlay = () => {
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



  render() {
    //propiedades a utilizar
    const {  menuOverlay } = this.props;
    return (
      <div>



      <nav className="navbar" style={styles.nav} role="navigation" aria-label="main navigation">
      

      <div className="navbar-brand">
            <a className="navbar-item" href="/">
            <img src={logo} style={styles.logo} />
            </a>     
      </div>
      
    
        
        <div className="navbar-start">
         <div className="navbar-item" onClick={this.menuOverlay}>mostar menu</div>
        </div>
        </nav> 



     


      </div>
    );
  }
}
