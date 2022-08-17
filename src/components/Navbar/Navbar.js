import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = ({ pages }) => {
    return (
        <nav className="header">
            <div className="header__contenedor">
                <div className="container_nav">
                    <Link to="/" className="logo">MY FAIRYTALE</Link>
                    <div>
                        <ul className="container_enlaces">
                        {pages.map((page) => (
                            <li className="enlaces" key={page.name}>
                                <Link to={page.url} className="enlaces_text">{page.name}</Link>
                            </li>
                        ))}
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