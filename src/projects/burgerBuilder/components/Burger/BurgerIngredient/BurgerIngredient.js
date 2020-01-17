import React from "react";
import "./BurgerIngredient.scss";
import PropTypes from "prop-types";
import Aux from "../../../../../components/hodComponents/Aux";

function BurgerIngredient(props) {
  let burgerIngredient = null;
  switch (props.type) {
    case "bread-bottom":
      burgerIngredient = <div className="BreadBottom"></div>;
      break;
    case "cheese":
      burgerIngredient = <div className="Cheese"></div>;
      break;
    case "salad":
      burgerIngredient = <div className="Salad"></div>;
      break;
    case "meat":
      burgerIngredient = <div className="Meat"></div>;
      break;
    case "bacon":
      burgerIngredient = <div className="Bacon"></div>;
      break;
    case "bread-top":
      burgerIngredient = (
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
      );
      break;
    default:
      return null;
  }
  return <Aux>{burgerIngredient}</Aux>;
}
BurgerIngredient.prototype = {
  type: PropTypes.string.isRequired
};
export default BurgerIngredient;
