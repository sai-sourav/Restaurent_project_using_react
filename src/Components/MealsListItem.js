import React from "react";
import AddtoCart from "./AddtoCart";
import "./MealsListItem.css";

const MealsListItem = (props) => {
  return (
    <React.Fragment>
      <li className="meal_item" key={props.id}>
        <div>
          <p className="Meal_name">{props.name}</p>
          <p className="Meal_desc">{props.description}</p>
          <p className="Meal_price">$ {props.price}</p>
        </div>
        <AddtoCart />
      </li>
    </React.Fragment>
  );
};

export default MealsListItem;
