import React, { useState, useContext } from "react";
import { ModalContext } from "../ctx/ModalContext";
import { data } from "./data";
import classes from './nav.module.css'
import Submenu from "./Submenu";

export const Navbar = () => {
  const [showSub, setShowSub] = useState(false);
  const {showSubmenu, hideSubmenu, isSubmenuShown} = useContext(ModalContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {data.map((obj) => {
          return (
            <li key={obj.text} onMouseOver={showSubmenu}>
              <a href={obj.link}>
                {obj.text}
                <span className="icon">{obj.icon}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <Submenu classes={classes.submenu}/>
    </nav>
  );
};
