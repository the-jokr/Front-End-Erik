import React from "react";
import { connect } from "react-redux";
import jsonwebtoken from "jsonwebtoken";
import { Dimmer, Loader, Image, Segment, Divider } from "semantic-ui-react";

import {
    getWallet,
    getJokes,
    delJoke,
    activeItem,
    delSaveJoke
} from "../actions";

class JokeWallet extends React.Component {
    state = {
        userID: jsonwebtoken.decode(localStorage.getItem("token")).subject
    };

    componentDidMount() {
        this.props.getWallet(this.state.userID);
    }

    activeItem = (e, joke) => {
        e.preventDefault();
        this.props.activeItem(joke);
        this.props.history.push("/edit-joke");
    };

    deleteJoke = (e, joke) => {
        e.preventDefault();
        this.props
            .delJoke(joke)
            .then(res => this.props.getWallet(this.state.userID));
    };

    deleteSave = (e, joke) => {
        e.preventDefault();
        this.props
            .delSaveJoke(joke)
            .then(res => this.props.getWallet(this.state.userID));
    };

    render() {
        if (this.props.isFetching) {
            return (
                <Segment>
                    <Dimmer active inverted>
                        <Loader size='large'>Loading</Loader>
                    </Dimmer>

                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Segment>
            );
        }

        return (
            <div className='wallet'>
                <h1>MY JOKES:</h1>
                <Segment.Group raised>
                    {this.props.wallet.submittedJokes.map(joke => (
                        <Segment key={joke.id}>
                            <h1>{joke.setup}</h1>
                            <h4>{joke.punch_line}</h4>
                            <button onClick={e => this.activeItem(e, joke)}>
                                Edit
                            </button>
                            <button onClick={e => this.deleteJoke(e, joke)}>
                                Delete
                            </button>
                        </Segment>
                    ))}
                </Segment.Group>
                <Divider />
                <h1>Saved Jokes:</h1>
                <Segment.Group raised>
                    {this.props.wallet.savedJokes.map(joke => (
                        <Segment key={joke.joke_id}>
                            <h1>{joke.setup}</h1>
                            <h4>{joke.punch_line}</h4>
                            <button onClick={e => this.deleteSave(e, joke)}>
                                delete
                            </button>
                        </Segment>
                    ))}
                </Segment.Group>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.getWallet.fetchingWallet,
        wallet: state.getWallet.walletItems
    };
};

export default connect(
    mapStateToProps,
    { getWallet, getJokes, delJoke, activeItem, delSaveJoke }
)(JokeWallet);
