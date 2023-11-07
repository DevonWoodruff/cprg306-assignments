"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "./_utils/auth-context";
import { useEffect } from "react";

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null); // New state variable to hold the name of the selected item

  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  useEffect(() => {
    if (user) { // If the user is logged in
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
      return () => unsubscribe();
    }
  }
  , [user]);


  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedItemName = item.name.trim(); // Clean up the selected item's name
    setSelectedItemName(cleanedItemName); // Update the selectedItemName state with the cleaned item name
  };

  return (
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
  );
};

export default Page;