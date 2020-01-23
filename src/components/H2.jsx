import React, { Component } from "react";

export default class H2 extends Component {
  render() {
    // facil de extender pero le llegaran todas las propiedades que le queramos definir, solo para componenete no muy complejos

    return <h2 {...this.props} />;
  }
}
