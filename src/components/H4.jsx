import React, { Component } from "react";

const styles = {
  fontSize: "4.5em"
};

export default class H4 extends Component {
  render() {
    return <h4 style={styles} {...this.props} />;
  }
}
