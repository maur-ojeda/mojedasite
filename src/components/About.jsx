import React, { Component } from "react";
import Section from "./Section";
import ContainerColumns from "./ContainerColumns";
import Column from "./Column";

const styles = {
    innerSection:{
      marginTop: '32px'
    }

}



export default class about extends Component {



  render() {
    return (
      <Section className="innerSection">

          <div className="columns is-mobile">
            <div className="column">
              <h1 className="H1">Hi. Hola. soy Mauricio</h1>
              <p className="P">Soy Diseñador gráfico (frontEnd, ui, ux) e Ingeniero en informática (developer , backend, analista funcional), vivo en Chile.</p>
              <p className="P">Me apasiona  la tecnología y la forma de interactuar con ella.</p>
              <p className="P">Me considero una persona responsable , dinámica y creativa. Con facilidad de adaptación y capacidad de trabajar en equipo.</p>
              <p className="P">Poseo iniciativa para resolver problemas y lograr metas propuestas.</p>
              <p className="P">I started doing what I do ever since I can remember. I was 10 and my big brother just started learning graphic and web design. I was bored and wanted to help him do his homework. That's how I learned to use Photoshop, and I continued using it through most of my childhood. Eventually, in 2011 after I finished my military service, it became my profession.</p>
              <p className="P">Today I’m a freelancer. Usually, I work with product directors to develop intuitive experiences and user interfaces that meet their business goals. Sometimes I also jump into front end development. My newest passion is creating animated prototypes to illustrate the 'feel' of the product.</p>
              <p className="P">I'm doing it all because I enjoy making an impact. Seeing that a solution that I helped develop improved the engagement rate by 10% always means alot to me. It makes me feel that my job is important and helps people. That's why I only work on projects and with teams I believe in.</p>



            </div>
            <div className="column">
              <img src="https://66.media.tumblr.com/141f9a7eb0bba2df42c0f1797538316e/tumblr_pcp5ebg0gN1ty8kogo1_500.jpg" alt=""/>
              </div>
          </div>
          <div className="columns">
        <div className="column" >
          <h1 className="H1">Experiencia</h1>
        </div>
        <div className="column">
        <div className="columns">
        <div className="column"><p className="P">Cargo</p></div>
        <div className="column"><p className="P">Empresa</p></div>
        <div className="column"><p className="P">año</p></div>
        </div>
        </div>
      </div>
      <div className="columns">
        <div  className="column">
          <h1 className="H1">Herramientas</h1>
        </div>
        <div className="column">
        <div>
          <h2 className="H2">Desarrollo</h2>
          <p className="P">javascript, angular, vueJs, nodeJS, Express, Flutter , bootstrap, tail wind, scss, ionic php laravel symfony , ruby , python (y sumando)</p>
          <h2 className="H2">diseño</h2>
          <p className="P">Adobr XD, sketch, ilustrator photoshop axure rp  balsamic (y sumando)
</p>  
          </div>
        </div>
      </div>
      </Section>
    );
  }
}



