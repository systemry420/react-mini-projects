import { createContext, useReducer, useEffect } from "react";
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
    dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const increase = (id) => {
    dispatch({ type: "INCREASE", id });
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", id })
  }

  useEffect(() => {
      dispatch({type: "UPDATE_TOTALS"})
      return () => {
      };
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, 
        increase, decrease,
        removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
