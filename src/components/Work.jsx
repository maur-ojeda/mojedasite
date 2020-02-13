import React from "react";
//import UsersAPI from "../api";
import WorksAPI from "../api-works";
import { Link } from "react-router-dom";

const Work = ({ match: { params: { id } } }) => {
    const work = WorksAPI.get(parseInt(id));
    if (!work) {
        return <div>Lo sentimos, el usuario fue encontrado</div>;
    }
    return (
        <div>
            este es un work
            <h1>

                {work.name} 
                (id: {work.id})
            </h1>
            <h2>Proyecto: {work.project}</h2>
            
            {/*
            <h2>imagenes titulo: {work.images[0].title}</h2>
            <h2>imagenes titulo: <img src={work.images[0].url}/></h2>
            */}
            <Link to="/works">Back</Link>
        </div>
    );
};

export default Work;
