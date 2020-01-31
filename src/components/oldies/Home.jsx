import React, { Component } from "react";

const styles = {
  frase: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: "42px",
    color: "#FFFFFF"
  }
};

export default class Home extends Component {
  handleClick = () => {
    console.log(this.props);
    const { history } = this.props;
    history.push("/about");
  };
  render() {
    return (

      <section className="section">
        <h1 style={styles.frase}>
          Soy Mauricio Ojeda y hago cosas de internet
        </h1>

        <article className="article">
          <div onClick={this.handleClick}>
            componente ir about o cualquier ruta
          </div>
        </article>
      </section>
      
    );
  }
}
