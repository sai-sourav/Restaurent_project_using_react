import "./CartItemList.css";

import CartItem from "./CartItem";
import React, { useContext } from "react";
import CartItemContext from "../../Context/update-cart";

const CartItemList = (props) => {
  const cartitem = useContext(CartItemContext);
  return (
    <ul className="Cart_item_list">
      {cartitem.cartitems.map((item) => {
        return (
          <CartItem
            key={item.id}
            title={item.title}
            amount={item.amount}
          />
        );
      })}
    </ul>
  );
};

export default CartItemList;
