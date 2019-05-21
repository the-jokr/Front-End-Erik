import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import "../styles/login.css";

import Loader from "react-loader-spinner";

class Login extends React.Component {
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

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials);
    //      .then(() => this.props.history.push('/protected'));
  };

  render() {
    return (
      <div>
        <form className="login-form" onSubmit={this.login}>
          <input
            type="text"
            name="username"
            placeholder="User name"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder=".........."
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />

          <div className="flex-spacer" />
          {this.props.error && <p className="error">{this.props.error}</p>}

          <button>
            {this.props.loggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ error, loggingIn }) => ({
  error,
  loggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
