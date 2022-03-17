import React, { useContext } from 'react'
import Followers from './components/Followers';
import Info from './components/Info';
import User from './components/User';
import { GithubCtx, GithubProvider } from './context/Github-ctx'

const Main = () => {
    const context = useContext(GithubCtx);
  return (
    <main>
        <h1>Github User</h1>
        <Info />
        <User />
        <Followers />
    </main>
  )
}

export default Main