import React, { Component } from "react";

export default class Column extends Component {
  render() {
    

    const { children, otherClass } = this.props;

    return (

        
        <div className="column" {...otherClass} >
            {children}
        </div>
    );
  }
}
