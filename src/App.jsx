import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Amazon from "./components/Amazon.jsx";
import Cart from "./components/Cart.jsx";

library.add(fas);

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  return (
    <React.Fragment>
      <Navbar />
      <Amazon />
      <Cart />
    </React.Fragment>
  );
};

export default App;
