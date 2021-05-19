import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity, TextInput,Alert} from 'react-native';

import firebase from '../../ApiKeys';

import * as Facebook from 'expo-facebook';

export default class LoginScreen extends React.Component{

    constructor(props){
        super(props)

        this.state=({
            email:'',
            password:''
        })
    }

    loginUser = (email,password) => {

        if(email == "") {
            alert("Write your email!");
        } else if(password == "") {
            alert("Write your password!");
        } else {
            firebase.auth().signInWithEmailAndPassword(email,password).then( () => {
               this.props.navigation.navigate('StartScreen');
            })
             .catch( function(error) {
                var errorCode = error.code;
                if(errorCode == 'auth/invalid-email')
                alert("Invalid Email!");
                else if(errorCode == 'auth/user-not-found') 
                alert("User not found!");
                else if(errorCode == 'auth/wrong-password') 
                alert("Wrong Password!"); 
            });
        }
    }
    

    async loginWithFacebook() {

          await Facebook.initializeAsync({appId: '<APP_ID>'});
          const {type,token} = await Facebook.logInWithReadPermissionsAsync({permissions: ['public_profile']});

          if (type === 'success') {

            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);

            const credential = firebase.auth.FacebookAuthProvider.credential(token);
            firebase.auth().signInWithCredential(credential).catch(error => {console.log(error)});
            this.props.navigation.navigate('StartScreen');
            
          }
       
      }

    render(){
        return(
        <View style = {styles.container}>
            <Image style={styles.logo} source={require('../assets/lgrg.png')}/>

            <TextInput style={{top: -50, height: 50, width: 300, justifyContent: 'center', backgroundColor: 'white', borderRadius: 15}}
                       placeholder=" Email" 
                       placeholderTextColor="#771D98"
                       autoCapitalize="none"
                       autoCorrect={false}
                       onChangeText={(email)=>this.setState({email})}
            />
            <TextInput style={{top: -40, height: 50, width: 300, justifyContent: 'center', backgroundColor: 'white', borderRadius: 15}}
                       placeholder=" Password" 
                       placeholderTextColor="#771D98"
                       secureTextEntry={true}
                       onChangeText={(password)=>this.setState({password})}
            />
            <TouchableOpacity onPress={() => this.loginUser(this.state.email,this.state.password)} style={styles.buttonContainer}>
                 <Text style={{textAlign: 'center', fontSize: 28, top: 0, color: 'white', fontWeight: 'bold'}}>Log in</Text>
            </TouchableOpacity>

            <Text style={{top: 5, color:"#771D98", fontWeight:'bold',fontSize:20}}>or with</Text>

            <View style={{flexDirection:'row'}} >
                <TouchableOpacity onPress={() => this.loginWithFacebook()}>
                <Image style={{width:50,height:50,position:'absolute',top:10, marginHorizontal:10}} source={require('../assets/fb.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Image style={{width:50,height:50,position:'absolute',top:10,marginHorizontal:-50}} source={require('../assets/gm.png')}/>
                </TouchableOpacity>
            </View>

            
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7CDEA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200, 
        height: 200,
        position: 'absolute',
        top: 60,
    },
    buttonContainer: {
        top: -10,
        height: 50,
        width: 300,
        justifyContent: 'center',
        backgroundColor: '#771D98',
        borderRadius: 25,
     }
});

