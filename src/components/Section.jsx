import React, { Component } from "react";

export default class Section extends Component {
  render() {    
    const { children } = this.props;
    return  <section  {...this.props}  className="section">{children}</section>;
  }
}

