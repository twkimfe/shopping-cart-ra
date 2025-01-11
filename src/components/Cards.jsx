import React from "react";

const Cards = ({ item }) => {
  const { title, author, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="Image" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price - ${price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;
