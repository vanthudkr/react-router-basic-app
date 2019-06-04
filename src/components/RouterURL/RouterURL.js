import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Product from "../Products/Product";
import Contact from "../Contact/Contact";
import Detail from "../Detail/Detail";
import Error from "../Error/Error";

const RouterURL = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/contact" component={Contact} />
        <Route path="/detail/:id/:slug" component={Detail} />
        <Route component={Error} />
      </Switch>
    </div>
  );
};

export default RouterURL;
