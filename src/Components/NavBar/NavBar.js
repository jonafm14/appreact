import CartWidger from '../CartWidget/CartWidget';
import './NavBar.css'
import { useState ,useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { firestoreDb } from '../../services/firebase'
import { getDocs, collection} from 'firebase/firestore'

const NavBar = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=> {
        getDocs(collection(firestoreDb, 'categories')).then(response => {
            const categories = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
        })
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
            <div className="headerNav__cuenta">
                <a href='#' >Cuenta</a>
                <CartWidger/>
            </div>
            <div className="headerNav__categorias">
                <ul className="headerNav__categorias__links">
                    { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({isActive}) => isActive ? 'activeOption':'option'}>
                        {cat.description}
                    </NavLink>)}
                </ul>
            </div>
        </div>
    )
}

export default NavBar;