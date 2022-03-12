import React from "react";
import { useGlobalContext } from "../cock-ctx";

const Search = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchRef = React.useRef("");

  const handleChange = () => {
    setSearchTerm(searchRef.current.value);
  };

  React.useEffect(() => {
    searchRef.current.focus()
  }, [])

  return (
    <div>
      <input
        type={"text"}
        onChange={handleChange}
        ref={searchRef}
        placeholder="Look up your drink"
      />
    </div>
  );
};

export default Search;
