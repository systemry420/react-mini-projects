import Main from './color-shades/Main';
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

function App() {
  return (
    <ModalProvider>
      <CartProvider>
      <div className="App">
        <Router>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/cocktail/:id' element={<SingleDrink />}></Route>
            <Route exact path='/about' element={<About />}></Route>
            <Route path='*' element={<Error />}></Route>
          </Routes>
        </Router>
         {/* <Navbar /> */}
        {/* <CartContainer /> */}
        {/*<Main />
        <Modal /> */}
      </div>
      </CartProvider>
    </ModalProvider>
  );
}

export default App;
