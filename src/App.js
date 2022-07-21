import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <ItemListContainer greeting="¡Bienvenido a My FairyTale!" />
      </header>
    </div>
  );
}

export default App;
