import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <div className="border border-sky-600 bg-blue-400 w-max p-2 m-4">
      <h2>{name}</h2>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </div>
  );
};

export default Item;