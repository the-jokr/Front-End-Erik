import React from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Icon } from "semantic-ui-react";

import { addJoke } from "../actions";

class AddJokeForm extends React.Component {
    state = {
        setup: "",
        punch_line: ""
    };

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props
            .addJoke(this.state)
            .then(res => this.props.history.push("/jokesfeed"));
    };
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Setup</label>
                            <Input
                                fluid
                                name={"setup"}
                                onChange={this.handleChange}
                                value={this.state.setup}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Punch Line</label>
                            <Input
                                fluid
                                name={"punch_line"}
                                onChange={this.handleChange}
                                value={this.state.punch_line}
                            />
                        </Form.Field>
                    </Form.Group>
                    <Button animated>
                        <Button.Content visible>Next</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                </Form>
            </div>
        );
    }
}

export default connect(
    null,
    { addJoke }
)(AddJokeForm);
