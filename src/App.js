import { ModalProvider } from './ctx/ModalContext';
import Modal from './modal/Modal';
import { CartProvider } from './shopping-cart/cart.context';
import CartContainer from './shopping-cart/CartContainer';
import Sidebar from './sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './cocktails/components/Navbar';
import Home from './cocktails/pages/Home';
import Error from './cocktails/pages/Error';
import About from './cocktails/pages/About';
import SingleDrink from './cocktails/pages/SingleDrink';
import RandomUser from './random-user/RandomUser';
import React, { useState } from 'react'
import Main from './github-user/Main';
import { GithubProvider } from './github-user/context/Github-ctx';

const getTheme = () => {
  const theme = 'light-theme'
  if (localStorage.getItem('theme')) {
    return localStorage.getItem('theme')
  }
  return theme
}

function App() {
  const [theme, setTheme] = useState(getTheme());
  
  const toggleTheme = () => {
    if (theme === 'light-theme') {
      document.documentElement.className = 'dark-theme'
      setTheme('dark-theme')
    } else {
      document.documentElement.className = 'light-theme'
      setTheme('light-theme')
    }
    localStorage.setItem('theme', theme)
  }

  return (
    <ModalProvider>
      <CartProvider>
        <GithubProvider>
        <div className="App">
        {/* <p>
          <button className='btn btn-primary' onClick={toggleTheme}>Toggle Theme</button>
        </p> */}
          <Router>
            {/* <Navbar /> */}
            <Routes>
                <Route exact path="/" element={<Main />}></Route>
              <Route
                exact
                path="/cocktail/:id"
                element={<SingleDrink />}
                ></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route path="*" element={<Error />}></Route>
            </Routes>
          </Router>
          {/* <CartContainer /> */}
          {/*<Main />
        <Modal /> */}
        </div>
        </GithubProvider>
      </CartProvider>
    </ModalProvider>
  );
}

export default App;
