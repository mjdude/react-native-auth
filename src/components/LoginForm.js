import React, {Component}  from 'react';
import {Button, Card, CardSection, Input} from './common'

class LoginForm extends Component {
    state = {
        email:'',
        password: ''
    }
    render(){
        return (
        <Card>
            <CardSection>
                <Input 
                placeholder="user@example.com"
                label="Email"
                value={this.state.email}
                onChangeText={email => this.setState({email})}>
                </Input>
            </CardSection>
            <CardSection>
                <Input
                secureTextEntry={true}
                placeholder="password"
                label="Password"
                value={this.state.password}
                onChangeText={ password => this.setState({password})}
                >
                </Input>
            </CardSection>
            <CardSection>
                <Button>
                    Login
                </Button>
            </CardSection>
        </Card>
        )
    }
}

export default LoginForm;