import { createContext, useState } from "react";
import mock_user from "./mock-data/user";
import mock_followers from "./mock-data/follower";
import {mock_repos} from "./mock-data/repos";

const GithubCtx = createContext();

const URL = "https://api.github.com";

const GithubProvider = ({ children }) => {
    const [gitUser, setGitUser] = useState(mock_user);
    const [followers, setFollowers] = useState(mock_followers);
    const [repos, setRepos] = useState(mock_repos);


  return (
    <GithubCtx.Provider value={{
        gitUser,
        repos,
        followers
    }}>
        {children}
    </GithubCtx.Provider>
  )
};

export { GithubCtx, GithubProvider };
