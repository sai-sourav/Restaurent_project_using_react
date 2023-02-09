import Header from "./Components/Header";
import React from 'react';
import Summary from "./Components/Summary";
import MealsList from "./Components/MealsList";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Summary></Summary>
      <MealsList></MealsList>
    </React.Fragment>
  );
}

export default App;
