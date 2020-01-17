import React, { Component } from "react";

class InputComponent extends Component {
  render() {
    return (
      <div className="form-group">
        {this.props.labelName ? (
          <label htmlFor={this.props.name}>{this.props.labelName}</label>
        ) : null}
        <input
          className={this.props.classes}
          type={this.props.type}
          name={this.props.name}
          value={this.props.value}
          placeholder={this.props.placeholder}
          required={this.props.required}
          autoComplete={this.props.autoComplete || "off"}
          onChange={this.props.valueChange}
        ></input>
      </div>
    );
  }
}

export default InputComponent;
