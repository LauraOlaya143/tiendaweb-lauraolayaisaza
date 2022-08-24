// esta es la app
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import HomeNavbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import OrderFormulary from './components/OrderFormulary/OrderFormulary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import CartContainer from './components/CartContainer/CartContainer';
import Footer from './components/Footer/Footer'

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
          <HomeNavbar pages={PAGES}/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
            <Route path="/category/:category" element={<ItemListContainer/>}/>
            <Route path="/cart" element={<CartContainer/>}/>
            <Route path="/orderdata" element={<OrderFormulary/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>  
    </div>
  );
}

export default App;
