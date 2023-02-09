import React from "react";
import "./CartItem.css";

const CartItem = (props) => {
  return (
    <React.Fragment>
      <li className="popup-content" key={Math.random().toString()}>
        <h3>{props.title}</h3>
        <div className="popup-content_amount">
          <h2>Total Amount</h2>
          <h2>{props.amount}</h2>
        </div>
      </li>
    </React.Fragment>
  );
};

export default CartItem;
