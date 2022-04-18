import NavBar from '././Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Alert from '@mui/material/Alert';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([])
  console.log(cart);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer setCart={setCart} cart={cart}/>} />
          <Route path='*' element={<Alert variant="filled" severity="error">NOT FOUND 404</Alert>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
