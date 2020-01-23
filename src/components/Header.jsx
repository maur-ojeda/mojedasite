import React, { Component } from "react";
//import logo from "../logo.svg";

//componenetes super portables, no keyframes  ni !important
const styles = {
  header: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white"
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
      <header style={styles.header}>
        {/*<img src={logo} className="App-logo" alt="logo" >*/}
        <p>{miau}</p>
        <a href="#" onClick={this.manejaClick}>
          cliquea aqui
        </a>
      </header>
    );
  }
}
