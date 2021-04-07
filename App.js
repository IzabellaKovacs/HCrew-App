import React from 'react';
import ApiKeys from './ApiKeys';
import * as firebase from 'firebase';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './app/screens/StartScreen';

import Meals from './app/screens/Meals';
import Exercises from './app/screens/Exercises';
import Breakfast from './app/screens/Breakfast';
import Lunch from './app/screens/Lunch';
import Dinner from './app/screens/Dinner';
import Dessert from './app/screens/Dessert';

import Breakfast1_1 from './app/screens/Breakfast1_1';
import Breakfast1_2 from './app/screens/Breakfast1_2';
import Breakfast1_3 from './app/screens/Breakfast1_3';
import Breakfast1_4 from './app/screens/Breakfast1_4';
import Cardio from './app/screens/Cardio';
import BodyBld from './app/screens/BodyBld';
import Legs1 from './app/screens/Legs1';
import Redirection1 from './app/screens/Redirection1';
import Legs2 from './app/screens/Legs2';


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
          <Stack.Screen name="Meals" component={Meals}/>
          <Stack.Screen name="Breakfast" component={Breakfast}/>
          <Stack.Screen name="Lunch" component={Lunch}/>
          <Stack.Screen name="Dinner" component={Dinner}/>
          <Stack.Screen name="Dessert" component={Dessert}/>
          <Stack.Screen name="Exercises" component={Exercises}/>

          <Stack.Screen name="Breakfast1_1" component={Breakfast1_1}/>
          <Stack.Screen name="Breakfast1_2" component={Breakfast1_2}/>
          <Stack.Screen name="Breakfast1_3" component={Breakfast1_3}/>
          <Stack.Screen name="Breakfast1_4" component={Breakfast1_4}/>

          <Stack.Screen name="Cardio" component={Cardio}/>
          <Stack.Screen name="BodyBld" component={BodyBld}/>
             <Stack.Screen name="Redirection1" component={Redirection1}/>
          <Stack.Screen name="Legs1" component={Legs1}/>
          <Stack.Screen name="Legs2" component={Legs2}/>
          
        </Stack.Navigator>
      </NavigationContainer> 
     );
  }
}

