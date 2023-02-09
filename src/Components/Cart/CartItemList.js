import "./CartItemList.css";

import CartItem from "./CartItem";
import React, { useContext } from "react";
import CartContext from "../../Context/display-cart";

const CartItemList = (props) => {
  const cartitem = useContext(CartContext);
  return (
    <ul className="Cart_item_list">
      {cartitem.cartitems.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            quantity={item.quantity}
            amount={item.amount}
          />
        );
      })}
    </ul>
  );
};

export default CartItemList;
