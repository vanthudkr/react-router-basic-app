import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink activeClassName="selected" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/product">
            Product
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
