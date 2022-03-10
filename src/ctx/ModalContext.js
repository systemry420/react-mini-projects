import React, { useState } from "react";

const ModalContext = React.createContext();

const ModalProvider = ({ children }) => {
  const [isModalShown, setIsModalShown] = useState(false);

  const showModal = () => {
    setIsModalShown(true);
  };

  const hideModal = () => {
    setIsModalShown(false);
  };

  return (
    <ModalContext.Provider value={{ isModalShown, showModal, hideModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
