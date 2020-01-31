import React from "react";
import { Switch, Route } from "react-router-dom";


import Home from "./Home";
import Users from "./Users";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";

const Main = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/works" component={Works} />
            <Route path="/users" component={Users} />
            <Route path="/contact" component={Contact} />
        </Switch>
    </div>
);

export default Main;
