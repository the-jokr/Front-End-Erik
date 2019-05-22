import React from "react";
import { connect } from "react-redux";
import { Button, Form } from "semantic-ui-react";

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
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            icon="user"
            iconPosition="left"
            label="Username"
            name="username"
            onChange={this.handleChange}
            value={this.state.credentials.username}
          />
          <Form.Input
            icon="lock"
            iconPosition="left"
            label="Password"
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.credentials.password}
          />
          <Button content="Register" primary />
        </Form>
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
