import Header from "./Components/Header";
import React from "react";
import Summary from "./Components/Summary";
import MealsList from "./Components/MealsList";
import { useContext } from "react";
import CartContext from "../src/Context/display-cart";
import Popup from "./Components/Cart/ShowCart";

function App() {
  const cart = useContext(CartContext);
  return (
    <React.Fragment>
      <React.Fragment>{cart.showcart && <Popup />}</React.Fragment>
      <React.Fragment>
        <Header></Header>
        <Summary></Summary>
        <MealsList></MealsList>
      </React.Fragment>
    </React.Fragment>
  );
}

export default App;
