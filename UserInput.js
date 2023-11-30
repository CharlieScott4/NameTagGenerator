import React, { Component } from "react";
class UserInput extends Component {
  state = {
    name: ""
  };
  updateName = (event) => this.setState({ name: event.target.value});
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addName(this.state.name);
    this.setState({ name: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.name}
          onChange={this.updateName}
        />
        <button type="submit">Generate Name Tag</button>
      </form>
    );
  }
}
export default UserInput;