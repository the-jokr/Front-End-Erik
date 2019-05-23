import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

import { getJokes, addSavedJokes } from "../actions";
import { connect } from "react-redux";
import Joke from "./Joke";

class JokeFeed extends React.Component {
  componentDidMount() {
    this.props.getJokes();
  }

  render() {
    console.log(this.props.jokes);

    const JokeID = this.props.jokes.map(joke => {
      return joke.id;
    });
    console.log(JokeID);

    if (this.props.isFetching) {
      return (
        <Segment>
          <Dimmer active inverted>
            <Loader size="large">Loading</Loader>
          </Dimmer>

          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Segment>
      );
    }
    return (
      <div className="JokeFeed">
        {this.props.jokes.map(joke => {
          return (
            <Joke
              key={joke.id}
              joke={joke}
              saveJoke={this.props.addSavedJokes}
            />
          );
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
  { getJokes, addSavedJokes }
)(JokeFeed);
