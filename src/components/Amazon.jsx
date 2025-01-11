import React from "react";
import list from "../data.jsx";
import "../styles/amazon.css";
import Cards from "./Cards";

const Amazon = () => {
  return (
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} />
      ))}
    </section>
  );
};

export default Amazon;
