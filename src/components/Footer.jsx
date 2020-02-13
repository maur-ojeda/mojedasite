import React, { Component } from "react";

const styles = {
  footer:{
    position:'fixed',
    bottom:'0',
    height: '3rem',
   }
}
export default class Footer extends Component {
  render() {
    return (
      <div className="container is-fluid" style={styles.footer}>
        <div className="columns">
          <div className="column is-1">
            <a href="/" className="link">Contáctame</a>
          </div>
          <div className="column is-1 is-offset-9">
            <div className="level-right is-pulled-right">
              <a className="link" href="/">Linkedin</a>
              <a className="link" href="/">Behenace</a>
              <a className="link" href="/">Dribble</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

