import React from "react";
import "./App.css";

import { Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import JokeWallet from "./components/JokeWallet";
import JokeFeed from "./components/JokeFeed"
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="App">
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/my-wallet">My Jokes</Link>
      <Link to="/jokestream">Jokes</Link>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/jokestream" component={JokeFeed} />
      <PrivateRoute path="/my-wallet" component={JokeWallet} />
    </div>
  );
}

export default App;
