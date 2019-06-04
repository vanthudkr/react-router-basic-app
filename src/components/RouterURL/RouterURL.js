import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Product from "../Products/Product";
import Contact from "../Contact/Contact";

const RouterURL = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Home} />
      </Switch>
    </div>
  );
};

export default RouterURL;
