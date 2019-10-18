import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { Button, Form } from "semantic-ui-react";

import { register } from "../actions";

const Register = props => {
    const [username, setUser] = useState("");
    const [password, setPass] = useState("");
    const registerState = useSelector(state => state.register);

    const handleSubmit = e => {
        e.preventDefault();
        props.register({ username, password });

        if (registerState.error === null) {
            props.history.push("/login");
        }
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Input
                    icon='user'
                    iconPosition='left'
                    label='Username'
                    name='username'
                    onChange={e => setUser(e.target.value)}
                    value={username}
                />
                <Form.Input
                    icon='lock'
                    iconPosition='left'
                    label='Password'
                    type='password'
                    name='password'
                    onChange={e => setPass(e.target.value)}
                    value={password}
                />
                <p>
                    {registerState.error ? registerState.error.message : null}
                </p>
                <Button content='Register' primary />
            </Form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        registering: state.register.registering
    };
};

export default connect(
    mapStateToProps,
    { register }
)(Register);
