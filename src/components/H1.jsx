import React, { Component } from "react";
const styles = {
  H1: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: "42px",
    color: "#FFFFFF"
  }
};

export default class H1 extends Component {
  render() {
    // Children todo lo que va en las etiquetas, renderiza todos hijos que le mandemos

    const { children } = this.props;

    return  <h1 style={styles.H1}> {children}</h1>;
  }
}
