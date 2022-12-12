import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import items from './data/Items.js';
import ItemDetailContainer from './pages/ItemDetailContainer';
function App() {

  if (!localStorage.getItem('carrito')) {
    localStorage.setItem('carrito', JSON.stringify([]))
  } 

  if (!localStorage.getItem('cantidad')) {
    localStorage.setItem('cantidad', 0)
  }

  if (!localStorage.getItem('total')) {
      localStorage.setItem('total', 0)
  }

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer items={items} />}/>
        <Route path="/category/:categoryId" element={<ItemListContainer items={items}/>}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
