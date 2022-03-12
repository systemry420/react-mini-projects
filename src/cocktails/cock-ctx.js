import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const CockContext = React.createContext();

const CockProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = async () => {
      setLoading(true)
      try {
        const res = await fetch(`${url}${searchTerm}`)
        const data = await res.json()
        console.log(data);
        if (!data['drinks']) {
            setCocktails([])
        } else {
            setCocktails(data['drinks'])
        }
        setLoading(false)
    } catch (e) {
        console.log(e);
    }
  };

  useEffect(() => {
      fetchDrinks()
      return () => {
      };
  }, [searchTerm]);

  return (
    <CockContext.Provider 
        value={{ loading, cocktails, setSearchTerm }}>
      {children}
    </CockContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(CockContext);
};

export { CockContext, CockProvider };
