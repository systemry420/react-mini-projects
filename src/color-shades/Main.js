import React, { useState } from "react";
import classes from "./style.module.css";

const Main = () => {
  const [input, setInput] = useState("");

  return (
    <div className={classes.main}>
      <h1>Color shades Generator</h1>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Please enter HEX"
        />
        <input type="submit" value="Generate" />
      </form>
    </div>
  );
};

export default Main;
