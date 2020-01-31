import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Loadable from "react-loadable";
import './App.css';
import close from "./052-close.svg";
const Loader = x =>
  Loadable({
    loading: () => "cargando ...",
    loader: x
  });

const Header = Loader(() => import("./components/Header"));
const Footer = Loader(() => import("./components/Footer"));
const Home = Loader(() => import("./components/Home"));
const About = Loader(() => import("./components/About"));
const Works = Loader(() => import("./components/Works"));
const Contact = Loader(() => import("./components/Contact"));

class App extends Component {
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
    const {  menuOverlay } = this.props;
    return (

    <Router>
      <div className="App">
<div className="menuOverlay close">
  <div className="container">
    <div className="section">
      <div className="columns">
        <div className="column">
          <Link className="link-item animacion" onClick={this.menuOverlay} to="/">Home</Link>
          <Link className="link-item animacion"  onClick={this.menuOverlay} to="about">About</Link>
          <Link className="link-item animacion" onClick={this.menuOverlay} to="works">Works</Link>
          <Link className="link-item animacion" onClick={this.menuOverlay} to="contact">Contact</Link>
        </div>
        <div className="column">
        <div className="link-item" onClick={this.menuOverlay}> <img className="iconClose" src={close} height="24" width="24"/></div>
        </div>
      </div>
      </div>
    </div>
</div>

<section className="section">
  <div className="container">
    <Route path="/" component={Header} />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/works" component={Works} />
    <Route exact path="/contact" component={Contact} />
    <Route path="/" component={Footer} />
  </div>
  </section>
</div>
</Router> 
);

  }
}
export default App;