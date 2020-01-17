import React, { Component } from "react";
import "./Ingredient.scss";
export default class Ingredient extends Component {
  render() {
    return (
      <div className="Ingredient">
        <label>{this.props.label}</label>
        <button
          className="btn btn-warning"
          onClick={this.props.remove}
          disabled={this.props.disabled}
        >
          Remove
        </button>
        <button className="btn btn-primary" onClick={this.props.add}>
          Add
        </button>
      </div>
    );
  }
}
