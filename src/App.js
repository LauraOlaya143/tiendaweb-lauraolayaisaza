import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const PAGES = [
  { name: "Monster High", url: "/category/Monster%20High" },
  { name: "Ever After High", url: "/category/Ever%20After%20High"},
  { name: "Rainbow High", url: "/category/Rainbow%20High" }
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar pages={PAGES}/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a My FairyTale!" />}/>
          <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="¡Filtro de nuestros productos!"/>}/>
          <Route path="/cart" element={<h1>ESTE ES TU CARRITO :D</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
