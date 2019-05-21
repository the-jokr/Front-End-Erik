import React from "react";
import { connect } from "react-redux";

import { register } from "../actions";

class Register extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.register(this.state.credentials);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Username:{" "}
          <input
            name="username"
            onChange={this.handleChange}
            value={this.state.credentials.username}
          />
          Password:{" "}
          <input
            name="password"
            onChange={this.handleChange}
            value={this.state.credentials.password}
          />{" "}
          <button>Register</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    registering: state.register.registering
  };
};

export default connect(
  mapStateToProps,
  { register }
)(Register);
