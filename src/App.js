
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from './componnents/Navbar';
import {ItemListContainer} from './componnents/ItemListContainer ';
import { Counter } from './componnents/Counter';


function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer cambios="¡¡¡¡Hola mundo!!!!"/>
    <Counter inicial={1} stock={10} />
    </>
  );
}

export default App;

