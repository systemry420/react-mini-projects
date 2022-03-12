import React from 'react'
import { CockContext, CockProvider, useGlobalContext } from '../cock-ctx'
import List from '../components/List'
import Search from '../components/Search'

const Home = () => {
  return (
    <div>
        <CockProvider>
            <Search />
            <List />
        </CockProvider>
    </div>
  )
}

export default Home