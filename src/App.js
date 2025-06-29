import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import About from "./components/About";
import Review from "./components/Review";
import Order from "./components/Order";
import './styles/global.css';
import React, { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  const handleCart = (item, price) => {
    setCart([...cart, { item, price }]);
    alert(`${item} has been added to your cart.`);
  };

  console.log("Cart:", cart);
  return (
    <>
    <Navbar cart={cart} setCart={setCart} />
    <Home />
    <Menu handleCart={handleCart} />
    <About />
    <Review />
    <Order cart={cart} setCart={setCart} />

    </>
  );
}

export default App;
