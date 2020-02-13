import React, { Component } from "react";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import Container from "./Container";
import '../App.css';


const styles = {
  wrapper: {
      padding:'4.2%',
      minHeight:"100vh"
  }

}


export default class App extends Component {
  

    render() {
  
          return (
  
  <Section style={styles.wrapper}>
            <Container> 
                <Header />   
                <Main/>
            </Container>
            <Footer/>
        </Section>

      );
    }}
