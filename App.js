import React from 'react';
import ApiKeys from './ApiKeys';
import * as firebase from 'firebase';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './app/screens/StartScreen';

const Stack = createStackNavigator();

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
    };
    if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
  }

  render(){
     return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="WelcomeScreen">
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
          <Stack.Screen name="LoginScreen" component={LoginScreen}/>
          <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
          <Stack.Screen name="StartScreen" component={StartScreen}/>
        </Stack.Navigator>
      </NavigationContainer> 
     );
  }
}

