import React, { Component } from "react";
import WorksAPI from "../api-works";
import { Link } from "react-router-dom";



const mapWork = url =>
    WorksAPI.all().map(u => (
        <li key={u.id}>
            <Link to={`${url}/${u.id}`}>{u.name}</Link>
        </li>
    ));


export default class AllWorks extends Component {

  

    render() {
      const { match } = this.props;
      return (     
        <div>
            <h1>UX</h1>
            <ul>{mapWork(match.url)}</ul>
            <hr/>

            <h1>develpment</h1>
            <ul>{mapWork(match.url)}</ul>
            <hr/>


        </div>
        );
    }
  }
  