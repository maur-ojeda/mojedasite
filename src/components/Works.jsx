import React from "react";
import { Switch, Route } from "react-router-dom";
import AllWorks from "./AllWorks";
import Work from "./Work";

const Works = ({ match }) => (
    <Switch>
        <Route exact path={`${match.url}`} component={AllWorks} />
        <Route path={`${match.url}/:id`} component={Work} />
    </Switch>
);

export default Works;
