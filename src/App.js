import Main from './color-shades/Main';
import { ModalProvider } from './ctx/ModalContext';
import Modal from './modal/Modal';
import { Navbar } from './navbar/Navbar';
import { CartProvider } from './shopping-cart/cart.context';
import CartContainer from './shopping-cart/CartContainer';
import Sidebar from './sidebar/Sidebar';

function App() {
  return (
    <ModalProvider>
      <CartProvider>
      <div className="App">
         <Navbar />
        <CartContainer />
        {/*<Main />
        <Modal /> */}
      </div>
      </CartProvider>
    </ModalProvider>
  );
}

export default App;
