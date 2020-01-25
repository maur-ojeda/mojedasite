import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
//componenetes super portables, no keyframes  ni !important
const styles = {
  header: {
    fontSize: "calc(10px + 2vmin)",
    color: "white"
  },
  color: {
    background: "red"
  },
  menu: {
    display: "none"
  }
};

export default class Header extends Component {
  manejaClick = () => {
    const { miau, manejaClick } = this.props;
    manejaClick(miau);
  };
  render() {
    //propiedades a utilizar
    const { miau, manejaClick } = this.props;
    return (
      <header className="header row" style={styles.header}>
        {/*<div className="logo">
          <img src={logo} />
        </div>
        <div className="nav" style={styles.menu}>
          menu
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>

            <li>
              <Link to="works">works</Link>
            </li>

            <li>
              {" "}
              <Link to="contact">contact</Link>
            </li>
          </ul>
        </div>
  */}
        <div className="row">
          <div
            style={styles.color}
            className="col-xs-12
                col-sm-8
                col-md-6
                col-lg-4"
          >
            <div className="box">Responsive</div>
          </div>
        </div>
      </header>
    );
  }
}
