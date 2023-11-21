"use client";

import React,{ReactNode} from "react";
import { useUserAuth } from "./_utils/auth-context";
import { useState } from "react";
import Link from "next/link";
import ItemList from "./shopping-list/item-list";
import NewItem from "./shopping-list/new-item";
import itemsData from "./shopping-list/items.json";
import MealIdeas from "./shopping-list/meal-ideas";

const Page = () => {

  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null); // New state variable to hold the name of the selected item

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedItemName = item.name.trim(); // Clean up the selected item's name
    setSelectedItemName(cleanedItemName); // Update the selectedItemName state with the cleaned item name
  };

  if (!user) {
    return <>
      <p>logged out</p>
      <button onClick={gitHubSignIn}>Sign In</button>
      </>
  }

  return <>
    <p>Welcome, {user.displayName} ({user.email})</p>
    <button onClick={firebaseSignOut}>Sign Out</button>
    <div className="flex">
      <div>
        <ItemList items={items} onItemSelect={handleItemSelect} /> {/* Pass the handleItemSelect function as the onItemSelect prop */}
        <NewItem onAddItem={handleAddItem} />
        <Link className="text-blue-400" href="/">
          Back To Home
        </Link>
      </div>
      <div>
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />} {/* Render the MealIdeas component if an item is selected */}
      </div>
    </div>
    </>
}

export default Page;