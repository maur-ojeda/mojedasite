import React from "react";
import UsersAPI from "../api";
import { Link } from "react-router-dom";

const Work = ({ match: { params: { id } } }) => {
    const user = UsersAPI.get(parseInt(id));
    if (!user) {
        return <div>Lo sentimos, el usuario fue encontrado</div>;
    }
    return (
        <div>
            este es un work
            <h1>

                {user.name} (id: {user.id})
            </h1>
            <h2>Proyecto: {user.project}</h2>
            <Link to="/works">Back</Link>
        </div>
    );
};

export default Work;
