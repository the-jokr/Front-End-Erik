import React from "react";
import { Accordion, Icon } from "semantic-ui-react";

class Joke extends React.Component {
  state = { activeIndex: -1 };

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
    console.log(this.props);
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
          <button onClick={e => this.saveJoke(e, this.props.joke)}>
            Save Joke
          </button>
        </Accordion.Content>
      </Accordion>
    );
  }
}

export default Joke;
