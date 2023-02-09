import React from "react";
import "./Header.css";
import mealsImage from '../../src/images/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className="header">
        <h2>Zomato app</h2>
        <div className="header___Cart">
            <HeaderCartButton />
        </div>
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
