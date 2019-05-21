import React from "react";
import { getJokes } from "../actions";
import { connect } from "react-redux";
import Joke from "./Joke";

class JokeFeed extends React.Component {
  componentDidMount() {
    this.props.getJokes();
  }

  render() {
    console.log(this.props);

    if (this.props.isFetching) {
      return <div>Loading ...</div>;
    }

    return (
      <div className="JokeFeed">
        {this.props.jokes.map(joke => {
          return <Joke key={joke.id} joke={joke} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    jokes: state.getJokes.jokes,
    isFetching: state.getJokes.isFetching
  };
};

export default connect(
  mapStateToProps,
  { getJokes }
)(JokeFeed);
