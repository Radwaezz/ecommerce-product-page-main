import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';
import Collections from './Pages/Collections';
import Men from './Pages/Men';
import Women from './Pages/Women';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { CartProvider } from './components/CartContext/CartContext'; 

function App() {
  return (
    <main>
    <CartProvider> {/* Wrap your app in the CartProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/women" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </Router>
    </CartProvider>
    </main>
  );
}

export default App;
