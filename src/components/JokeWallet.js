import React from "react";
import { connect } from "react-redux";
import { getJokes } from "../actions";

class JokeWallet extends React.Component {
  componentDidMount() {
    this.props.getJokes();
  }
  render() {
    
    return <div />;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    jokes: state.getJokes.jokes
  };
};

export default connect(
  mapStateToProps,
  { getJokes }
)(JokeWallet);
