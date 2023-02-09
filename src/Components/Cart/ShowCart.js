import React from "react";
import ReactDOM from "react-dom";
import "./ShowCart.css";
import CartContext from "../../Context/display-cart";
import { useContext } from "react";

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
          <div className="popup-content">
            <h3>Sushi</h3>
            <div className="popup-content_amount">
              <h2>Total Amount</h2>
              <h2>35.62</h2>
            </div>
          </div>
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
