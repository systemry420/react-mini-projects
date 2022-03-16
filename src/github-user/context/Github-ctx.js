import { createContext } from "react";

const GithubCtx = createContext();

const URL = "https://api.github.com";

const GithubProvider = ({ children }) => {
  return (
    <GithubCtx.Provider value={'hell'}>
        {children}
    </GithubCtx.Provider>
  )
};

export { GithubCtx, GithubProvider };
