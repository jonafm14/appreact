import NavBar from '././Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';

function App() {
  const handleOnAdd = (quantity) => {
    console.log(`Se agregaron ${quantity} productos`);
  }
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Productos'}/>
      <ItemCount initial={0} stock={10} onAdd={handleOnAdd} />
      </div>
  );
}

export default App;
