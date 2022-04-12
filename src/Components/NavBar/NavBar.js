import CartWidger from '../CartWidget/CartWidget';
import './NavBar.css'
import { useState ,useEffect } from 'react';
import { getCategories } from '../asyncmock';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=> {
        getCategories().then(categories => {
            setCategories(categories)
        })
    }, [])

    return (
        <div className="headerNav">
            <div className="headerNav__logo">
                <Link to='/' >
                    <h3>Ecommerce</h3>
                </Link>
            </div>
            <div className="headerNav__buscador">
                <input type="text" />
                <button variant="contained" size="small">Buscar</button>
            </div>
            <div className="headerNav__cuenta">
                <a href='#' >Cuenta</a>
                <CartWidger/>
            </div>
            <div className="headerNav__categorias">
                <ul className="headerNav__categorias__links">
                    { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({isActive}) => isActive ? 'activeOption':'option'}>
                        {cat.description}
                    </NavLink>)}
                    {/*<li><a href="#" >Televisores</a></li>
                    <li><a href="#" >Computadoras</a></li>
                    <li><a href="#" >Consolas</a></li>
                    <li><a href="#" >Celulares</a></li>*/}
                </ul>
            </div>
        </div>
    )
}
export default NavBar;