import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Icon } from "semantic-ui-react";

import { addJoke } from "../actions";

const AddJokeForm = props => {
    const [setup, setSetup] = useState("");
    const [punch_line, setPunch] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        props
            .addJoke({ setup, punch_line })
            .then(res => props.history.push("/jokesfeed"));
    };

    console.log(props);
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Field>
                        <label>Setup</label>
                        <Input
                            fluid
                            name={"setup"}
                            onChange={e => setSetup(e.target.value)}
                            value={setup}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Punch Line</label>
                        <Input
                            fluid
                            name={"punch_line"}
                            onChange={e => setPunch(e.target.value)}
                            value={punch_line}
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
};

export default connect(
    null,
    { addJoke }
)(AddJokeForm);
