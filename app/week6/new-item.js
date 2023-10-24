import { useState } from "react";
import React from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [itemCreated, setItemCreated] = useState(false);

  const handleAddItem = () => {
    const newItem = {
      name,
      quantity: parseInt(quantity),
      category,
    };

    onAddItem(newItem);

    setItemCreated(true);

    setName("");
    setQuantity("");
    setCategory("");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <main>
      <div>
        {itemCreated && (
          <div className="border border-sky-600 bg-blue-400 w-max p-2 m-4">
            Item Created
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="pl-5 pt-5 text-xl font-bold">Create New Item</h1>
        <div className="flex flex-col">
          <label className="text-xl font-bold">
            Name:
            <input
              className="border border-sky-600 bg-blue-400 w-max p-2 m-4"
              type="text"
              required
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <label className="text-xl font-bold">
            Quantity:
            <input
              className="border border-sky-600 bg-blue-400 w-max p-2 m-4"
              type="number"
              min="1"
              max="99"
              required
              value={quantity}
              onChange={handleQuantityChange}
            />
          </label>
          <label className="text-xl font-bold">
            Category:
            <select
              className="border border-sky-600 bg-blue-400 w-max p-2 m-4"
              value={category}
              required
              onChange={handleCategoryChange}
            >
              <option></option>
              <option value="Produce">Produce</option>
              <option value="Dairy">Dairy</option>
              <option value="Bakery">Bakery</option>
              <option value="Meat">Meat</option>
              <option value="FrozenFoods">Frozen Foods</option>
              <option value="CannedGoods">Canned Goods</option>
              <option value="DryGoods">Dry Goods</option>
              <option value="Beverages">Beverages</option>
              <option value="Snacks">Snacks</option>
              <option value="Household">Household</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <button
            className="border border-sky-600 bg-blue-400 w-max p-2 m-4"
            onClick={handleAddItem}
          >
            Create Item
          </button>
        </div>
      </div>
    </main>
  );
}