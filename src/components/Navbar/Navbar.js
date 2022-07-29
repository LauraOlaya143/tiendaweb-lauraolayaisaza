import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="header">
            <div className="header__contenedor">
                <div className="container_nav">
                    <Link to="/" className="logo">MY FAIRYTALE</Link>
                    <div>
                        <ul className="container_enlaces">
                            <li className="enlaces">
                                <Link to="/category/Monster%20High" className="enlaces_text">Monster High</Link>
                            </li>
                            <li className="enlaces">
                                <Link to="/category/Ever%20After%20High" className="enlaces_text">Ever After High</Link>
                            </li>
                            <li className="enlaces">
                                <Link to="/category/Rainbow%20High" className="enlaces_text">Rainbow High</Link>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <div>
                    <button className="carrito_botones">
                        <CartWidget />
                    </button>
                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;