import React from "react";
import list from "../data.jsx";
import "../styles/amazon.css";
import Cards from "./Cards";

const Amazon = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;
