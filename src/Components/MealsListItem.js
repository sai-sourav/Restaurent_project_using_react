import React, { useContext } from "react";
import CartContext from "../Context/display-cart";
import AddtoCart from "./AddtoCart";
import "./MealsListItem.css";

const MealsListItem = (props) => {
  const Cartitem = useContext(CartContext);

  function getitemquantity(quantity){
    const newitem = {
      id: props.id,
      title: props.name,
      amount: props.price,
      quantity: quantity
    }
    Cartitem.updatecartitems(newitem);
  }
  return (
    <React.Fragment>
      <li className="meal_item" key={props.id}>
        <div>
          <p className="Meal_name">{props.name}</p>
          <p className="Meal_desc">{props.description}</p>
          <p className="Meal_price">$ {props.price}</p>
        </div>
        <AddtoCart getquantity={getitemquantity}/>
      </li>
    </React.Fragment>
  );
};

export default MealsListItem;
