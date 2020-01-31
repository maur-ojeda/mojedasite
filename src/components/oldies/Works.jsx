import React, { Component } from "react";
const styles = {
  color: {
    backgroundColor: "lime"
  }
};

export default class Works extends Component {
  render() {
    return (
      <section className="section">
        <article>
          <div className="container" style={styles.color}>
            <div className="columns">
              <div className="column is-one-quarter">
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                </ul>
              </div>
              <div className="column">
                <h1>Nombre de proyecto</h1>
                <h3>Año | tipo de proyecto</h3>
                Second column
              </div>
            </div>
          </div>
        </article>

      </section>
    );
  }
}
