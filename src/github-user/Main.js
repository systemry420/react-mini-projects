import React, { useContext } from 'react'
import Info from './components/Info';
import { GithubCtx, GithubProvider } from './context/Github-ctx'

const Main = () => {
    const context = useContext(GithubCtx);
  return (
    <main>
        <h1>Github User</h1>
        <Info />
    </main>
  )
}

export default Main