import { createContext, useState } from "react";
import mock_user from "./mock-data/user";
import mock_followers from "./mock-data/follower";
import {mock_repos} from "./mock-data/repos";

const GithubCtx = createContext();

const URL_ROOT = "https://api.github.com";
const URL_USER = "https://api.github.com/users/";

const GithubProvider = ({ children }) => {
    const [gitUser, setGitUser] = useState(mock_user);
    const [followers, setFollowers] = useState(mock_followers);
    const [repos, setRepos] = useState(mock_repos);


  const searchUser = async (user) => {
    const response = await fetch(URL_USER + user)
    const data = await response.json()
    setGitUser(data)
    getFollowers(data)
  }

  const getFollowers = async (user) => {
    let response = await fetch(URL_USER + user.login + '/followers')
    let data = await response.json()
    setFollowers(data)
    
    response = await fetch(`${URL_ROOT}/users/${user.login}/repos`)
    data = await response.json()
    setRepos(data)
  }

  return (
    <GithubCtx.Provider value={{
        gitUser,
        repos,
        followers,
        searchUser
    }}>
        {children}
    </GithubCtx.Provider>
  )
};

export { GithubCtx, GithubProvider };
