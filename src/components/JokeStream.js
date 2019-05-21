import React from "react";
import { getJokes } from "../actions";
import { connect } from "react-redux";
import Joke from "./Joke";

class JokeStream extends React.Component {


  componentDidMount() {
      this.props.getJokes();
  }

  render() {

    if (this.props.isFetching) {
      return <div>"Loading ...</div>
      }
      

    return (
      <div className="JokeStream">
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
)(JokeStream);
