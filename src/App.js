import NavBar from '././Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const handleOnAdd = (quantity) => {
    console.log(`Se agregaron ${quantity} productos`);
  }
  return (
    <div className="App">
      <NavBar/>
      <ItemDetailContainer/>
      <ItemListContainer/>
      <ItemCount initial={0} stock={10} onAdd={handleOnAdd} />
      </div>
  );
}

export default App;
