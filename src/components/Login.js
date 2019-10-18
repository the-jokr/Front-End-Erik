import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { login } from "../actions";

import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";

const Login = props => {
    const [username, setUser] = useState("");
    const [password, setPass] = useState("");
    const loginState = useSelector(state => state.login);
    console.log(loginState);

    const login = e => {
        e.preventDefault();
        props.login({ username, password });
        if (loginState.error !== null) {
            props.history.push("/jokesfeed");
        }
    };

    return (
        <Segment placeholder>
            <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                    <Form onSubmit={login}>
                        <Form.Input
                            icon='user'
                            iconPosition='left'
                            label='Username'
                            placeholder='Username'
                            name='username'
                            value={username}
                            onChange={e => setUser(e.target.value)}
                        />
                        <Form.Input
                            icon='lock'
                            iconPosition='left'
                            label='Password'
                            type='password'
                            name='password'
                            value={password}
                            onChange={e => setPass(e.target.value)}
                        />
                        <Button content='Login' primary />
                        <p>
                            {loginState.error ? loginState.error.message : null}
                        </p>
                    </Form>
                </Grid.Column>

                <Grid.Column verticalAlign='middle'>
                    <Button size='big'>
                        <Link to='/register'>Register</Link>
                    </Button>
                </Grid.Column>
            </Grid>

            <Divider vertical>Or</Divider>
        </Segment>
    );
};

const mapStateToProps = ({ error, loggingIn }) => ({
    error,
    loggingIn
});

export default connect(
    mapStateToProps,
    { login }
)(Login);
