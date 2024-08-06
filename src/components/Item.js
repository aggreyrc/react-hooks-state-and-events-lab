import React, {useState} from "react";

function Item({ name, category }) {
  
  const[isAddToCart, setIsAddToCart] = useState(true)


  function handleAdd(){
    setIsAddToCart((isAddToCart) => !isAddToCart)
  }

  return (
    <li className={isAddToCart? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAdd}>{isAddToCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
