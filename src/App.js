import Main from './color-shades/Main';
import { Navbar } from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
