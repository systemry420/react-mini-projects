import React, { useState, useContext } from "react";
import { ModalContext } from "../ctx/ModalContext";
import classes from "./style.module.css";

const Main = () => {
  const [color, setColor] = useState("");
  const context = useContext(ModalContext);

  const handleSubmit = (e) => {
    e.preventDefault()
    // let selectedColor = e.target.value
    // setColor(selectedColor);

    context.showModal()
  }

  return (
    <div className={classes.main}>
      <h1>Color shades Generator</h1>
      <button onClick={handleSubmit}>Show modal</button>

      {/* <form onSubmit={handleSubmit}>
        <input
          value={color}
          onChange={handleSubmit}
          type="color"
          placeholder="Please enter HEX"
        />
      </form> */}

      {/* <Tiles color={color}/> */}
    </div>
  );
};


const Tiles = ({ color }) => {
  return (
    <div style={{ 'background': color }} className={`${classes.tiles}`}>
    </div>
  )
}
export default Main;
