import React, { Component } from "react";
import { Route } from "react-router-dom";
import Loadable from "react-loadable";
import "./App.min.css";

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
  render() {
    return (
      <div className="App">
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/works" component={Works} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/" component={Footer} />
      </div>
    );
  }
}
export default App;
