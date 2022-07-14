import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        <ItemListContainer greeting="¡Bienvenido a My FairyTale!" />
      </header>
    </div>
  );
}

export default App;
