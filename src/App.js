import React from "react";
import "./App.scss";

import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";

import Login from "./components/Login";
import Register from "./components/Register";
import JokeWallet from "./components/JokeWallet";
import JokeFeed from "./components/JokeFeed";
import PrivateRoute from "./PrivateRoute";
import AddJokeForm from "./components/AddJokeForm";

class App extends React.Component {
  // state = {
  //   isLoggedIn: this.props.isLoggedIn
  // };

  // componentWillUpdate() {}

  // handleLoginClick = e => {
  //   if (localStorage.getItem("token")) {
  //     this.setState({ isLoggedIn: true });
  //   }
  // };

  // handleLogoutClick = e => {
  //   localStorage.removeItem("token");
  //   this.setState({ isLoggedIn: false });
  // };

  render() {
    // const isLoggedIn = this.state.isLoggedIn;
    // let button;

    // if (isLoggedIn) {
    //   button = <button onClick={this.handleLogoutClick}>Logout</button>;
    // } else {
    //   button = (
    //     <button onClick={this.handleLoginClick}>
    //       <Link to="/login">Login</Link>
    //     </button>
    //   );
    // }

    return (
      <div className="App">
        <div className="NavBar">
          <Link to="/jokesfeed">
            <Button>Jokes</Button>
          </Link>

          <Link to="/my-wallet">
            <Button>My Jokes</Button>
          </Link>

          <Link to="/add-joke">
            <Button>Add Joke</Button>
          </Link>
        </div>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/jokesfeed" component={JokeFeed} />
        <PrivateRoute path="/my-wallet" component={JokeWallet} />
        <PrivateRoute path="/add-joke" component={AddJokeForm} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    isLoggedIn: state.login.isLoggedIn
  };
};

export default connect(mapStateToProps)(App);
