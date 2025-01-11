// src/App.jsx
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Amazon from "./components/Amazon.jsx";
import Cart from "./components/Cart.jsx";
import "./styles/amazon.css";

library.add(fas);

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const tempArr = cart.map((data) => {
      if (data.id === item.id) {
        return { ...data, amount: Math.max(1, data.amount + d) };
      }
      return data;
    });
    setCart([...tempArr]);
  };

  return (
    <React.Fragment>
      <Navbar size={cart.length} setShow={setShow} />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      {warning && (
        <div className="warning">Item is already added to your cart</div>
      )}
    </React.Fragment>
  );
};

export default App;
