import React from "react";
// import classes from "./OrderSummary.module.css";

import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

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
      <p>
        <strong>Total Price: ${props.totalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button buttonType="Danger" clicked={props.purchaseCancelled}>
        Cancel
      </Button>
      <Button buttonType="Success" clicked={props.purchaseContinue}>
        Continue
      </Button>
    </Aux>
  );
};

export default orderSummary;
