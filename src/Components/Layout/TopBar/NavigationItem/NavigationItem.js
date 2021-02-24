import React from "react";

import { NavLink } from "react-router-dom";
import classes from "./style.module.css";

export default function NavigationItem(props) {
  return (
    <li className={classes.NavigationItem}>
      <NavLink to={props.link} exact activeClassName={classes.active}>
        {props.label}
      </NavLink>
    </li>
  );
}
