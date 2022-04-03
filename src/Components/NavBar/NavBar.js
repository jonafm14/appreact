import CartWidger from '../CartWidget/CartWidget';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="headerNav">
            <h4 className="nombre">Ecommerce</h4>
            <nav>
                <ul className="navLinks">
                    <li><a href="#" >Televisores</a></li>
                    <li><a href="#" >Computadoras</a></li>
                    <li><a href="#" >Consolas</a></li>
                    <li><a href="#" >Celulares y Tablets</a></li>
                </ul>
            </nav>
            <CartWidger/>
        </div>
    )
}
export default NavBar;