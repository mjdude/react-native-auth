import React, {Component}  from 'react';
import {View} from  'react-native';
import {Header, Button, Spinner} from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null};
    componentWillMount(){
        firebase.initializeApp({
                apiKey: "AIzaSyDjOvAUF-19OC76PquKlEBFkpvQReStSEo",
                authDomain: "react-native-auth-90ba3.firebaseapp.com",
                databaseURL: "https://react-native-auth-90ba3.firebaseio.com",
                projectId: "react-native-auth-90ba3",
                storageBucket: "react-native-auth-90ba3.appspot.com",
                messagingSenderId: "20381967930"
        })

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true})
            } else {
                this.setState({loggedIn: false})
            }
        });
    }

    renderContent(){
        switch (this.state.loggedIn) {
            case true:           
                return (
                    <View style={styles.containerStyle}>
                        <Button onPress={() => {firebase.auth().signOut()}}>Logout</Button>
                    </View>
                )    
            case false:           
                return <LoginForm></LoginForm>    
            default:
                return (
                <View style={styles.containerStyle}>
                    <Spinner size="large"></Spinner>
                </View>
                );
        }
    }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

// new version of react-native has changed some of the default styles
// button now needs to be wrapped in a view to be shown fo this example
const styles = {
  containerStyle: {
    flexDirection: 'row'
  }
};

export default App;