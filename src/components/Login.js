import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { login } from "../actions";

import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        this.props
            .login(this.state.credentials)
            .then(() => this.props.history.push("/jokesfeed"));
    };

    render() {
        return (
            <Segment placeholder>
                <Grid columns={2} relaxed='very' stackable>
                    <Grid.Column>
                        <Form onSubmit={this.login}>
                            <Form.Input
                                icon='user'
                                iconPosition='left'
                                label='Username'
                                placeholder='Username'
                                name='username'
                                value={this.state.credentials.username}
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                icon='lock'
                                iconPosition='left'
                                label='Password'
                                type='password'
                                name='password'
                                value={this.state.credentials.password}
                                onChange={this.handleChange}
                            />
                            <Button content='Login' primary />
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
    }
}

const mapStateToProps = ({ error, loggingIn }) => ({
    error,
    loggingIn
});

export default connect(
    mapStateToProps,
    { login }
)(Login);
