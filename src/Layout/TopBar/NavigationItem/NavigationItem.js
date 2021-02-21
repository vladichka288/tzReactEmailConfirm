import React from "react";

import { NavLink } from "react-router-dom";
import classes from "./style.module.css";

export default function NavigationItem(props) {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap');
      </style>
      <li className={classes.NavigationItem}>
        <NavLink to={props.link} exact activeClassName={classes.active}>
          {props.label}
        </NavLink>
      </li>
    </>
  );
}
