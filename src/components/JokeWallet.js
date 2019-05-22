import React from "react";
import { connect } from "react-redux";
import jsonwebtoken from "jsonwebtoken";

import { getWallet, getJokes, delJoke } from "../actions";

class JokeWallet extends React.Component {
  state = {
    userID: jsonwebtoken.decode(localStorage.getItem("token")).subject
  };

  componentDidMount() {
    this.props.getWallet(this.state.userID);
  }

  deleteJoke = (e, joke) => {
    e.preventDefault();
    this.props.delJoke(joke);
  };

  render() {
    if (this.props.isFetching) {
      return <div>loading...</div>;
    }
    return (
      <div>
        <h1>MY JOKES:</h1>
        {this.props.wallet.submittedJokes.map(joke => (
          <div key={joke.id}>
            <h1>{joke.setup}</h1>
            <h4>{joke.punch_line}</h4>
            <button onClick={e => this.deleteJoke(e, joke)}>Delete</button>
          </div>
        ))}

        <h1>Saved Jokes:</h1>
        {this.props.wallet.savedJokes.map(joke => (
          <div key={joke.id}>
            <h1>{joke.setup}</h1>
            <h4>{joke.punch_line}</h4>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    isFetching: state.getWallet.fetchingWallet,
    wallet: state.getWallet.walletItems
  };
};

export default connect(
  mapStateToProps,
  { getWallet, getJokes, delJoke }
)(JokeWallet);
