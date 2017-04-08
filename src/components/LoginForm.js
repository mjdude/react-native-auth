import React, {Component}  from 'react';
import {View} from 'react-native';
import { Button, Card, CardSection} from './common'

class LoginForm extends Component {
    render(){
        return (
        <View>
            <CardSection></CardSection>
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