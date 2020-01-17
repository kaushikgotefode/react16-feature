import React, { Component } from "react";
import "./BuildControls.scss";
import Ingredient from "./Ingredient/Ingredient";

export default class BuildControls extends Component {
  ingredients = [
    { label: "Salad", type: "salad" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
    { label: "Bacon", type: "bacon" }
  ];
  render() {
    return (
      <div className="BuildControls">
        <p>
          Total Price: <strong>{this.props.price}</strong>
        </p>
        {this.ingredients.map(ingredient => {
          return (
            <Ingredient
              add={() => this.props.addIngredient(ingredient.type)}
              remove={() => this.props.removeIngredient(ingredient.type)}
              label={ingredient.label}
              key={ingredient.label}
              disabled={this.props.ingredients[ingredient.type] <= 0}
            ></Ingredient>
          );
        })}
      </div>
    );
  }
}
