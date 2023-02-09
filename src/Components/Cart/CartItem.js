import React, { useContext } from "react";
import "./CartItem.css";
import CartContext from "../../Context/display-cart";

const CartItem = (props) => {
  const Cart = useContext(CartContext)
  const inc_quantity = (e) => {
    e.preventDefault();
    const newitem = {
      id: props.id,
      title: props.title,
      amount: props.amount,
      quantity: 1
    }
    Cart.updatecartitems(newitem);

  }

  const dec_quantity = (e) => {
    e.preventDefault();
    const newitem = {
      id: props.id,
      title: props.title,
      amount: props.amount,
      quantity: -1
    }
    Cart.updatecartitems(newitem);

  }
  return (
    <React.Fragment>
      <li className="popup-content" key={Math.random().toString()}>
        <div>
          <h3>{props.title}</h3>
          <div className="amount_quantity">
            <p>$ {props.amount}</p>
            <input type="text" value={`X ${props.quantity}`} readOnly></input>
          </div>
        </div>
        <div className="modify_qauntity">
          <button onClick={inc_quantity} className="inc_or_dec">+</button>
          <button onClick={dec_quantity} className="inc_or_dec">-</button>
        </div>
      </li>
    </React.Fragment>
  );
};

export default CartItem;
