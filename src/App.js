import NavBar from '././Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Hola coders'}/>
      </div>
  );
}

export default App;
