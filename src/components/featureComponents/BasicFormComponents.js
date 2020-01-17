import React, { Component } from "react";
import InputComponent from "../commonComponents/InputComponent";

class BasicFormComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "Kaushik",
      lName: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = () => {
    console.log('First Name:', this.state.fName, 'Last Name:',this.state.lName)
  };
  render() {
    return (
      <div>
        <form className="" onSubmit={this.onSubmit}>
          <InputComponent
            classes="form-control"
            name="fName"
            type="text"
            labelName="First Name"
            value={this.state.fName}
            valueChange={this.onChange}
            placeholder="Enter FirstName"
            required={true}
            autoComplete="off"
          ></InputComponent>
          <InputComponent
            classes="form-control"
            name="lName"
            type="text"
            labelName="Last Name"
            value={this.state.lName}
            valueChange={this.onChange}
            placeholder="Enter LastName"
            required={true}
            autoComplete="off"
          ></InputComponent>
        </form>
      </div>
    );
  }
}
export default BasicFormComponents;
