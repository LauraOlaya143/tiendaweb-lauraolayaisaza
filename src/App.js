// esta es la app

import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import CartContainer from './components/CartContainer/CartContainer';

const PAGES = [
  { name: "Monster High", url: "/category/Monster%20High" },
  { name: "Ever After High", url: "/category/Ever%20After%20High"},
  { name: "Rainbow High", url: "/category/Rainbow%20High" }
];

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar pages={PAGES}/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a My FairyTale!" />}/>
            <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
            <Route path="/category/:category" element={<ItemListContainer greeting="¡Filtro de nuestros productos!"/>}/>
            <Route path="/cart" element={<CartContainer/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>  
    </div>
  );
}

export default App;
