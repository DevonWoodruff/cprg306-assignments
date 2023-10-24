"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

const Page = () => {
    const [items, setItems] = useState(itemsData);
  
    const handleAddItem = (newItem) => {
      setItems([...items, newItem]);
    };

    return (
      <div>
        <ItemList items={items}/>
        <Link className="text-blue-400" href="/">
          Back To Home
        </Link>
      </div>
    );
  };
  
  export default Page;