import React from "react";
import "./MealsListItem.css";

const MealsListItem = (props) => {
  return (
    <React.Fragment>
      <li className="meal_item" key={props.id}>
        <p className="Meal_name">{props.name}</p>
        <p className="Meal_desc">{props.description}</p>
        <p className="Meal_price">$ {props.price}</p>
      </li>
    </React.Fragment>
  );
};

export default MealsListItem;
