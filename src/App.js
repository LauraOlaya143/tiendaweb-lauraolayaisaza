import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <ItemListContainer greeting="¡Bienvenido a My FairyTale!" />
        <ItemDetailContainer />
      </header>
    </div>
  );
}

export default App;
