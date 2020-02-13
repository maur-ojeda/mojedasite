import React, { Component } from "react";
import H1 from "./H1";
import Section from "./Section";
import Columns from "./Column";
const styles  = {
  uno:{ paddingTop:'25vh'},


}
export default class Home extends Component {
  
  render() {
   
    return (
      <Section>
        
        <Columns>
          <div className="column is-offset-1" style={styles.uno}>
            <H1>
                    Soy Mauricio Ojeda <br/>
                    UX designer y front-end developer
            </H1>
          </div>
  </Columns>
       


      </Section>);
  }
}

