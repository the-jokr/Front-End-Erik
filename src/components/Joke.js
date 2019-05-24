import React from "react";
import { Accordion, Icon } from "semantic-ui-react";
import jsonwebtoken from "jsonwebtoken";

class Joke extends React.Component {
  state = {
    userID: jsonwebtoken.decode(localStorage.getItem("token"))
      ? jsonwebtoken.decode(localStorage.getItem("token")).subject
      : null,
    activeIndex: -1
  };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  saveJoke = (e, joke) => {
    e.preventDefault();
    this.props.saveJoke(joke);
  };

  render() {
    console.log(this.state);
    const { activeIndex } = this.state;
    return (
      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          {this.props.joke.setup}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>{this.props.joke.punch_line}</p>
          <p>{this.props.joke.likes} likes</p>
          <button
            onClick={e =>
              this.saveJoke(e, {
                joke_id: this.props.joke.id,
                author_id: this.props.joke.author_id,
                user_id: this.state.userID
              })
            }
          >
            Save Joke
          </button>
        </Accordion.Content>
      </Accordion>
    );
  }
}

export default Joke;
