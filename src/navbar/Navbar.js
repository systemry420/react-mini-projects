import React from "react";
import { data } from "./data";
import './nav.css'

export const Navbar = () => {
  return (
    <nav>
      <ul>
        {data.map((obj) => {
          return (
            <li key={obj.text}>
              <a href={obj.link}>
                {obj.text}
                <span className="icon">{obj.icon}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
