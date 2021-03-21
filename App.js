import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import ApiKeys from './ApiKeys';
import * as firebase from 'firebase';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
    };
    if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
  }

  render(){
     return < LoginScreen />
  }
}

