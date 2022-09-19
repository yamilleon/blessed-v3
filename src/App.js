
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from './componnents/Navbar';
import { ItemListContainer } from './componnents/ItemListOthers/ItemListContainer ';
import { Counter } from './componnents/Counter';
import { ItemDetailContainer  as IDC} from './componnents/ItemDetailAndOthers/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>

    <Navbar/>
    <Routes>

    <Route exact path='/' element={<ItemListContainer cambios={"Hola mundo"}/>}/>
    <Route path='category/:categoria' element={<ItemListContainer cambios={"Hola mundo"}/>}/>
    <Route path='item/:id' element={<IDC cambios={"Hola mundo"}/>}/>



   </Routes>  
    
    </Router>
    </>
  );
}

export default App;

