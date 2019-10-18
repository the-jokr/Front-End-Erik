import React from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Icon } from "semantic-ui-react";

import { editJoke } from "../actions";

class EditJokeForm extends React.Component {
    state = {
        id: this.props.activeJoke.id,
        setup: this.props.activeJoke.setup,
        punch_line: this.props.activeJoke.punch_line
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
            .editJoke(this.state)
            .then(res => this.props.history.push("/my-wallet"));
    };
    render() {
        console.log(this.props.activeJoke);
        console.log(this.state);
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

const mapStateToProps = state => {
    console.log(state);
    return {
        activeJoke: state.activeItem.activeItem
    };
};

export default connect(
    mapStateToProps,
    { editJoke }
)(EditJokeForm);
