import React, { useState, useContext } from "react";
import { ModalContext } from "../ctx/ModalContext";
import { CartContext } from "../shopping-cart/cart.context";
import { data } from "./data";
import classes from './nav.module.css'
import Submenu from "./Submenu";

export const Navbar = () => {
  const {showSubmenu, hideSubmenu, isSubShown} = useContext(ModalContext);
  const [center, setCenter] = useState(0);

  const { amount } = useContext(CartContext);
  
  const handleSubClose = (e) => {
    if (!e.target.classList.contains('link')) {
      hideSubmenu()
    }
  }

  const handleShowSubmenu = (e) => {
    const btn = e.target.getBoundingClientRect()
    const center = (btn.left + btn.right) / 2
    console.log(center);
  }

  return (
    <nav className={classes.nav} onMouseOver={handleSubClose}>
      {/* <ul>
        {data.map((obj) => {
          return (
            <li key={obj.text}>
              <a href={obj.link}  className="link" onMouseOver={handleShowSubmenu}>
                {obj.text}
                <span className="icon">{obj.icon}</span>
              </a>
            </li>
          );
        })}
      </ul> */}
      {isSubShown && <Submenu classes={classes.submenu} onMouseOver={showSubmenu}/>}
      <div className='amount-container'>
        <p className='total-amount'>
          {amount}
        </p>
      </div>
    </nav>
  );
};
