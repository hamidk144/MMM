
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Single from './Pages/Single/Single';
import ProductList from './Pages/ProductList/ProductList';
import Register from './Pages/Register/Register';
import RepairLab from './Pages/RepairLab/RepairLab';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Checkout from './Pages/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/Products/:name" element={<ProductList/>} />
      <Route path="/single/:id" element={<Single/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/repairlab" element={<RepairLab/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />

      </Routes>
   

    </div>
  );
}

export default App;
