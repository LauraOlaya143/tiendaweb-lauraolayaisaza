import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="header">
            <div className="header__contenedor">
                <div className="enlaces_contenedor">
                    <div className="contenedor_opciones">
                        <select className="categoria">
                            <option value="">CATEGORIAS</option>
                            <option value="monster high">Monster High</option>
                            <option value="ever after high">Ever After High</option>
                            <option value="rainbow high">Rainbow High</option>
                            <option value="barbie">Barbie</option>
                            <option value="coleccionables">Coleccionables</option>
                        </select>
                        <button className="btn_filtro">Filtrar</button>
                    </div>
                    <button className="enlace_compra">TERMINAR COMPRA</button>
                </div>
                <div>
                    <input type="search" className="input_busqueda" placeholder=" Buscar en la pagina..."/>
                    <button id="boton_buscar" className="btn_busqueda">Buscar</button>

                </div>
                <div>
                    <button type="button" className="carrito_botones">
                        <i class="fas fa-cart-plus iconos"></i>
                    </button>
                    <button type="button" className="carrito_botones">
                        <i class="fas fa-star iconos"></i>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;