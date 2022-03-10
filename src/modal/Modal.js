import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "../ctx/ModalContext";
import classes from "./modal.module.css";

const Modal = () => {
  return ReactDOM.createPortal(<Main />, document.getElementById("modal"));
};

const Main = () => {
  const modalCtx = useContext(ModalContext);
  let show = modalCtx.isModalShown;

  return (
    <>
      {show && (
        <>
          <div onClick={modalCtx.hideModal} className={classes.overlay}></div>
          <div className={classes.modal}>Hello</div>
        </>
      )}
    </>
  );
};

export default Modal;
