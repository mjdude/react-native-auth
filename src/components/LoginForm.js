import React, {Component}  from 'react';
import {Text} from 'react-native';
import {Button, Card, CardSection, Input, Spinner} from './common'
import firebase from 'firebase';

class LoginForm extends Component {
    state = {
        email:'',
        password: '',
        error: '',
        loading: false,
    }

    onButtonPress(){
        const {email, password} = this.state;

        // reset error message
        this.setState({error: '', loading: true})

        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                console.log('Error is ', err);
                this.setState({error: 'Authentication failed'});
            })
        })
    }

    renderButton(){
        if (this.state.loading) {
            return <Spinner size="small"></Spinner>
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                    Login
            </Button>
        )
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
            <Text style={styles.errorTextStyle}>
                {this.state.error}
            </Text>
            <CardSection>
                {this.renderButton()}
            </CardSection>
        </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;