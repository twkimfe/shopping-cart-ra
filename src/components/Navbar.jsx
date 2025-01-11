import React from "react";
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop">Shopping Cart</span>
        <div className="cart">
          <span>
            <FontAwesomeIcon icon="fa-cart-plus"></FontAwesomeIcon>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
