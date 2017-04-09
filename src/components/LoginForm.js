import React, {Component}  from 'react';
import {View, TextInput} from 'react-native';
import {Button, Card, CardSection} from './common'

class LoginForm extends Component {
    render(){
        return (
        <View>
            <CardSection>
                <TextInput style={{height:20, width:100}}></TextInput>
            </CardSection>
            <CardSection></CardSection>
            <CardSection>
                <Button>
                    Login
                </Button>
            </CardSection>
        </View>
        )
    }
}

export default LoginForm;