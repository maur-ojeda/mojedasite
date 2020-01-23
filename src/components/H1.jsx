import React, { Component } from "react";

export default class H1 extends Component {
  render() {
    // Children todo lo que va en las etiquetas, renderiza todos hijos que le mandemos

    const { children } = this.props;

    return <h1 className="app-intro">{children}</h1>;
  }
}
