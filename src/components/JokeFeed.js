import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

import { getJokes } from "../actions";
import { connect } from "react-redux";
import Joke from "./Joke";

class JokeFeed extends React.Component {
  componentDidMount() {
    this.props.getJokes();
  }

  render() {
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
          return <Joke key={joke.id} joke={joke} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    jokes: state.getJokes.jokes,
    isFetching: state.getJokes.isFetching
  };
};

export default connect(
  mapStateToProps,
  { getJokes }
)(JokeFeed);
