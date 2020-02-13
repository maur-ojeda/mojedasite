import React, { Component } from "react";

export default class Container extends Component {
  render() {
    

    const { children } = this.props;

    return (

        <div {...this.props} className="container is-fluid">
            {children}
        </div>
    );
  }
}
