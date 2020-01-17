import React, { Component } from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import ContainerComponent from "../../../../components/hodComponents/ContainerComponent";

export default class Burger extends Component {
  render() {
    let extractedIngredients = Object.keys(this.props.ingredients)
      .map(ingredient => {
        return [...new Array(this.props.ingredients[ingredient])].map(
          (_, i) => {
            return (
              <BurgerIngredient
                key={ingredient + i}
                type={ingredient}
              ></BurgerIngredient>
            );
          }
        );
      })
      .reduce((arr, item) => {
        return arr.concat(item);
      }, []);
    if (extractedIngredients.length === 0) {
      extractedIngredients = <p>Please start adding ingredients</p>;
    }
    return (
      <ContainerComponent classes="Burger">
        <BurgerIngredient type="bread-top"></BurgerIngredient>
        {extractedIngredients}
        <BurgerIngredient type="bread-bottom"></BurgerIngredient>
      </ContainerComponent>
    );
  }
}
