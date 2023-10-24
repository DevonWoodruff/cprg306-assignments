"use client";
import { useState } from "react";
import React from "react";
import Item from "./item";
import itemsData from "./items.json";
import NewItem from "./new-item";

export default function ItemList() {
    const [items, setItems] = useState(itemsData);
    const [sortBy, setSortBy] = useState("name");
  
    const handleSortByName = () => {
      setSortBy("name");
      sortItems("name");
    };
  
    const handleSortByCategory = () => {
      setSortBy("category");
      sortItems("category");
    };
  
    const sortItems = (sortType) => {
      let sortedItems = [...items];
      sortedItems.sort((a, b) => {
        if (a[sortType] < b[sortType]) {
          return -1;
        }
        if (a[sortType] > b[sortType]) {
          return 1;
        }
        return 0;
      });
      setItems(sortedItems);
    };
  
    const handleAddItem = (newItem) => {
      setItems([...items, newItem]);
    };
  
    const itemComponents = items.map((item) => (
      <Item
        key={item.id}
        name={item.name}
        quantity={item.quantity}
        category={item.category}
      />
    ));
  
    return (
      <div className="w-max p-2 m-4">
        <NewItem onAddItem={handleAddItem} />
        <button
          className="m-2"
          onClick={handleSortByName}
          style={{ backgroundColor: sortBy === "name" ? "red" : "blue" }}
        >
          Sort By Name
        </button>
        <button
          onClick={handleSortByCategory}
          style={{ backgroundColor: sortBy === "category" ? "red" : "blue" }}
        >
          Sort By Category
        </button>
        {itemComponents}
      </div>
    );
  }