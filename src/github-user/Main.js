import React, { useContext } from "react";
import Followers from "./components/Followers";
import Info from "./components/Info";
import Repos from "./components/Repos";
import User from "./components/User";
import { GithubCtx, GithubProvider } from "./context/Github-ctx";

const Main = () => {
  const { searchUser } = useContext(GithubCtx);
  const [user, setUser] = React.useState("systemry420");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchUser(user);
  };

  return (
    <main>
      <h1>Github User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <input onChange={(e) => setUser(e.target.value)} value={user} />
          <input className="btn btn-primary" type={'submit'} value='Search' />
        </div>
      </form>
      <Info />
      <User />
      <Followers />
      <Repos />
    </main>
  );
};

export default Main;
