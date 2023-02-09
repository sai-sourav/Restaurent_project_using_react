import React, { useState } from "react";
import "./AddtoCart.css";

const AddtoCart = (props) => {
  const [quantity, updateQuantity] = useState(1);

  const increment = (evt) => {
    evt.preventDefault();
    updateQuantity(quantity + 1);
  };

  const decrement = (evt) => {
    evt.preventDefault();
    if(quantity !== 1){
        updateQuantity(quantity - 1);
    }
  };

  const addtocart = (evt) => {
    evt.preventDefault();
  }

  return (
    <form className="add-to-cart-form" onSubmit={addtocart}>
      <div className="add_items">
        <button className="inc_or_dec" onClick={increment}>
        +
        </button>
        <input type="text" value={quantity} disabled="true"></input>
        <button className="inc_or_dec" onClick={decrement}>
          -
        </button>
      </div>
      <button className="add-to-cart-button" type="submit">
        + Add
      </button>
    </form>
  );
};

export default AddtoCart;
