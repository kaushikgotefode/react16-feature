import React, { Component } from "react";
import Burger from "../components/Burger/Burger";
import BuildControls from "../components/BuildControls/BuildControls";
const INGREDIENTS_COST = {
  salad: 10,
  cheese: 20,
  meat: 15,
  bacon: 12
};
export default class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0
      },
      totalPrice: 20
    };
  }
  addIngredientHandler = type => {
    const newCount = this.state.ingredients[type] + 1;
    const updatedIngredients = { ...this.state.ingredients };
    const updatedPrice = this.state.totalPrice + INGREDIENTS_COST[type];
    updatedIngredients[type] = newCount;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    });
  };

  removeIngredientHandler = type => {
    const newCount = this.state.ingredients[type] - 1;
    const updatedIngredients = { ...this.state.ingredients };
    const updatedPrice = this.state.totalPrice - INGREDIENTS_COST[type];
    updatedIngredients[type] = newCount;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    });
  };

  render() {
    return (
      <div>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          price={this.state.totalPrice}
          ingredients={this.state.ingredients}
        />
      </div>
    );
  }
}
