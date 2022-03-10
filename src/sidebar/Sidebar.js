import React from "react";
import ReactDOM from "react-dom";
import { data } from "../navbar/data";
import './sidebar.css'

const Content = () => {
  return (
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
  );
};

const Sidebar = () => {
    return ReactDOM.createPortal(
        <Content />,
        document.getElementById('sidebar')
    )
};

export default Sidebar;
