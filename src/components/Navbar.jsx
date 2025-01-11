import React from "react";
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ size, setShow }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Online Bookstore
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <FontAwesomeIcon icon="fa-cart-plus"></FontAwesomeIcon>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
