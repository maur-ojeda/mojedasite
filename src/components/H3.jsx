import React, { Component } from "react";

const styles = {
  h3: ({ backgroundColor }) => ({
    backgroundColor,
    color: "red"
  })
};

export default class H3 extends Component {
  state = {
    backgroundColor: "#000"
  };

  cambiaColor = () => {
    this.setState({ backgroundColor: "lime" });
  };

  render() {
    // estilos dimamicos
    const { backgroundColor } = this.state;

    return (
      <h3 style={styles.h3({ backgroundColor })} onClick={this.cambiaColor}>
        estilos dinamicos
      </h3>
    );
  }
}
