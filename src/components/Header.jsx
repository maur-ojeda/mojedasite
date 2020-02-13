import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import close from "../close.svg";
import ellipsis from "../ellipsis.svg";

const menuOverlay = () => {
  const menu = document.querySelector(".menuOverlay");
  const enlacesMenu = document.querySelectorAll(".animacion");
  if (menu.classList.contains('close')) {
    menu.classList.remove('close');
    menu.classList.add('open');
    enlacesMenu.forEach(function (enlace, index) {
      enlace.classList.add('llegada');
    });
  } else {
    menu.classList.remove('open');
    enlacesMenu.forEach(function (enlace, index) {
      enlace.classList.remove('llegada');
    });
    menu.classList.add('close');
  }
};

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="menuOverlay close">  
              <div className="columns is-mobile">
                <div className="column is-10">
                  <Link className="link-item animacion" onClick={menuOverlay} to="/">Home</Link>
                  <Link className="link-item animacion" onClick={menuOverlay} to="/about">About</Link>
                  <Link className="link-item animacion" onClick={menuOverlay} to="/users">Users</Link>
                  <Link className="link-item animacion" onClick={menuOverlay} to="/works">Works</Link>
                  <Link className="link-item animacion" onClick={menuOverlay} to="/contact">Contact</Link>
                </div>
                <div className="column is-2">
                  <div className="link-item is-pulled-right" onClick={menuOverlay}> <img className="iconClose" src={close} height="24" width="24" alt="" /></div>
                </div>
              </div>
        </div>

        <div className="columns is-mobile header">
          <div className="column is-6">
            <a href="/">
              <img src={logo} className="logo" alt="" />
            </a>
          </div>
          <div className="column is-6">
            <div className="is-pulled-right" onClick={menuOverlay}><img src={ellipsis} alt="" /></div>
          </div>
        </div>
      </div>
    );
  }
}