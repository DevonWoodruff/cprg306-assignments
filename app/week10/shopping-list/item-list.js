import React, { useState, useEffect } from "react";
import Item from "./item";
import NewItem from "./new-item";
import getItems from "../_services/shopping-list-service";


const ItemList = ({ onItemSelect, items, setItems }) => {
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    const fetch = async () => {
      console.log(await getItems())
    }

    fetch()
  }, [])
  

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

  const cleanItemName = (itemName) => {
    // Remove size and emoji from item name
    const cleanedName = itemName.split(",")[0].trim();
    return cleanedName.replace(
      /([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g,
      ""
    );
  };

  const itemComponents = items.map((item) => (
    <Item
      key={item.name}
      name={cleanItemName(item.name)} // Clean up the item name
      quantity={item.quantity}
      category={item.category}
      onSelect={() => onItemSelect(item)}
    />
  ));

  return (
    <div className="w-max p-2 m-4">
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
};

export default ItemList;