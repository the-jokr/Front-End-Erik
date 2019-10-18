import React from "react";
import "./App.scss";

import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./components/Login";
import Register from "./components/Register";
import JokeWallet from "./components/JokeWallet";
import JokeFeed from "./components/JokeFeed";
import PrivateRoute from "./PrivateRoute";
import AddJokeForm from "./components/AddJokeForm";
import EditJokeForm from "./components/EditJokeForm";

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <div className='NavBar'>
                    <Link to='/login'>Login</Link>

                    <Link to='/jokesfeed'>Jokes</Link>

                    <Link to='/my-wallet'>My Jokes</Link>

                    <Link to='/add-joke'>Add Joke</Link>
                </div>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/jokesfeed' component={JokeFeed} />
                <PrivateRoute path='/my-wallet' component={JokeWallet} />
                <PrivateRoute path='/add-joke' component={AddJokeForm} />
                <PrivateRoute path='/edit-joke' component={EditJokeForm} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.login.isLoggedIn
    };
};

export default connect(mapStateToProps)(App);
