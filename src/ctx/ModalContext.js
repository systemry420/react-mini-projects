import React, { useState } from "react";

const ModalContext = React.createContext();

const ModalProvider = ({ children }) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [isSubShown, setIsSubShown] = useState(true)

  const showModal = () => {
    setIsModalShown(true);
  };

  const hideModal = () => {
    setIsModalShown(false);
  };

  const showSubmenu = () => {
    setIsSubShown(true)
  }
  
  const hideSubmenu = () => {
    setIsSubShown(false)
  }

  return (
    <ModalContext.Provider
      value={{
        isSubShown,
        showSubmenu,
        hideSubmenu,
        isModalShown,
        showModal,
        hideModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
