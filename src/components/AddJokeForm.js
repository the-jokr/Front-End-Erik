import React from "react";
import { connect } from "react-redux";
import { addJoke } from "../actions";

class AddJokeForm extends React.Component {
  state = {
    setup: "",
    punch_line: ""
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addJoke(this.state);
    this.props.history.push("/jokesfeed");
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Setup:{" "}
          <input
            name={"setup"}
            onChange={this.handleChange}
            value={this.state.setup}
          />
          Punch Line:{" "}
          <input
            name={"punch_line"}
            onChange={this.handleChange}
            value={this.state.punch_line}
          />
          <button>Submit Joke</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addJoke }
)(AddJokeForm);
