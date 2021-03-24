import React from "react";
// import classes from "./OrderSummary.module.css";

import Aux from "../../../hoc/Aux";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    const ingredientLength = props.ingredients[igKey];
    return (
      <li key={`${igKey}${ingredientLength}`}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {ingredientLength}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
    </Aux>
  );
};

export default orderSummary;
