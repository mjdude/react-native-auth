import React, {Component}  from 'react';
import {View} from  'react-native';
import {Header} from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount(){
        firebase.initializeApp({
                apiKey: "AIzaSyDjOvAUF-19OC76PquKlEBFkpvQReStSEo",
                authDomain: "react-native-auth-90ba3.firebaseapp.com",
                databaseURL: "https://react-native-auth-90ba3.firebaseio.com",
                projectId: "react-native-auth-90ba3",
                storageBucket: "react-native-auth-90ba3.appspot.com",
                messagingSenderId: "20381967930"
        })
    }
    render(){
        return (
            <View>
                <Header headerText="Authentication"></Header>
                <LoginForm></LoginForm>
            </View>
        )
    }
}

export default App;