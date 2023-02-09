import React from "react";
import ReactDOM from "react-dom";
import "./ShowCart.css";
import CartContext from "../../Context/display-cart";
import { useContext } from "react";
import CartItemList from "./CartItemList";

const Popup = (props) => {
  const CartPopup = (props) => {
    const cart = useContext(CartContext);

    function order(e) {
      e.preventDefault();
      console.log("ordered!!");
    }

    return (
      <div
        className="popup-overlay"
      >
        <div className="popup">
          <header className="popup-Header">
            <h2>Cart</h2>
          </header>
          <CartItemList></CartItemList>
          <footer className="popup-action">
            <button
              onClick={(e) => {
                e.preventDefault();
                cart.updateshowcart();
              }}
            >
              Close
            </button>
            <button onClick={order}>Order</button>
          </footer>
        </div>
      </div>
    );
  };

  return ReactDOM.createPortal(
    <CartPopup />,
    document.getElementById("overlay-root")
  );
};

export default Popup;
