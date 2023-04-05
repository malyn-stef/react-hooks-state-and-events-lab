import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)


  function handleClick() {
    setInCart(!inCart)

  }

  const classChange = inCart === false ? '' : 'in-cart'
  return (
    <li className={classChange}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
