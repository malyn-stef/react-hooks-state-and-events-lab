import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [displayItems, display] = useState(items)
  const [selectedCategory, setFilterBy] = useState("All")

  function handleChange(e) {
    setFilterBy(e.target.value)
    const newItems = items.filter((item) => { if (e.target.value === 'All') { return true } else if (item.category === e.target.value) { return item } })
    display(newItems)
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e) => handleChange(e)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
