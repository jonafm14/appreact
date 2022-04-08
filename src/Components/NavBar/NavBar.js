import CartWidger from '../CartWidget/CartWidget';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="headerNav">
            <div className="headerNav__logo">
                <h4>Ecommerce</h4>
            </div>
            <div className="headerNav__buscador">
                <input type="text" />
                <button>Buscar</button>
            </div>
            <div className="headerNav__cuenta">
                <a href='#' >Cuenta</a>
                <CartWidger/>
            </div>
            <div className="headerNav__categorias">
                <ul className="headerNav__categorias__links">
                    <li><a href="#" >Televisores</a></li>
                    <li><a href="#" >Computadoras</a></li>
                    <li><a href="#" >Consolas</a></li>
                    <li><a href="#" >Celulares y Tablets</a></li>
                </ul>
            </div>
        </div>
    )
}
export default NavBar;