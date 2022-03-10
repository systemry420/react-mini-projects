import Main from './color-shades/Main';
import { ModalProvider } from './ctx/ModalContext';
import Modal from './modal/Modal';
import { Navbar } from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <Navbar />
        <Main />
        <Modal />
      </div>
    </ModalProvider>
  );
}

export default App;
