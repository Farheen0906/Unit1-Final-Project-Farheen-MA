import { Routes, Route, Link  } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Cart from './components/Cart';

function App() {
 return (
 <div className="App">
   <h1>HomeCookeD - Delivered to your Doorstep</h1>
   <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/menu" element={<Menu />} />
     <Route path="/contact" element={<Contact />} />
    <Route path="/cart" element={<Cart />} />
   </Routes>
 </div>
 );
}
export default App;

