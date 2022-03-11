import { createContext, useReducer, useState } from "react";
import cartItems from "./data";
import { reducer } from "./reducer";

const CartContext = createContext();

const initialState = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
      dispatch({type: 'CLEAR_CART'})
  }

  return (
    <CartContext.Provider value={{ ...state, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
