import {useState} from 'react';
import { Routes, Route, Link  } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Checkout from './pages/Checkout';
import NavBar from './components/NavBar';
import './App.css';

function App() {
 return (
 <div className="App">
   <NavBar/>
   <main className='main-content'>
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/menu" element={<Menu />} />
     <Route path="/contact" element={<Contact />} />
    <Route path="/checkout" element={<Checkout />} />
   </Routes>
   </main>
 </div>
 );
}
export default App;

