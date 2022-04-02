import NavBar from '././Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Productos'}/>
      <ItemCount/>
      </div>
  );
}

export default App;
