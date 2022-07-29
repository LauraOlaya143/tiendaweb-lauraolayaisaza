import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a My FairyTale!" />}/>
          <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="¡Filtro de nuestros productos!"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
