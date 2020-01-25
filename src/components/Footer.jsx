import React, { Component } from "react";
import { Link } from "react-router-dom";

//componenetes super portables, no keyframes  ni !important
const styles = {
  footer: {
    backgroundColor: "lime",
    fontSize: "calc(10px + 2vmin)",
    color: "white"
  },
  enlace: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: "15px",
    color: "#FFFFFF"
  },
  lisocial: {
    display: "inline-block",
    fontFamily: "Montserrat-SemiBold",
    fontSize: "15px",
    color: "#FFFFFF"
  }
};

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer" style={styles.footer}>
        <div className="contact" style={styles.enlace}>
          Saludame
        </div>
        <div className="social">
          <ul>
            <li style={styles.lisocial}>Dribbble</li>
            <li style={styles.lisocial}> Linkedin</li>
            <li style={styles.lisocial}>Behance</li>
          </ul>
        </div>
      </footer>
    );
  }
}
