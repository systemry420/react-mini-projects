import React, { useContext } from 'react'
import { GithubCtx, GithubProvider } from './context/Github-ctx'

const Main = () => {
    const context = useContext(GithubCtx);
    console.log(context);
  return (
        <main>
            <h1>Github User</h1>

        </main>
  )
}

export default Main