import React, { Component } from "react";

export default class ContainerColumns extends Component {
  render() {
    

    const { children } = this.props;

    return (

        <div {...this.props} className="container">
        <div className="columns">
            {children}
        </div>
        </div>
    );
  }
}
