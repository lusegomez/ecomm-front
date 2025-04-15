import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./components/Home";
import Products from "./components/Products";
import FloatingCartButton from "./components/FloatingCartButton";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
      <FloatingCartButton itemCount={cartItems.length} />

    </Router>
  );
}

export default App;
