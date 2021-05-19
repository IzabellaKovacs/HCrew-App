import { firestore } from 'firebase';
import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity, TextInput,SafeAreaView} from 'react-native';

import firebase from '../../ApiKeys';

export default class RegisterScreen extends React.Component {
    
    constructor(props){
        super(props)

        this.state=({
            email:'',
            password:''
        })
    }

    signUpUser = (email,password) => {

        try{
            if(this.state.email.length == 0) {
                alert("Write your email!");
            } else if(password == "") {
                alert("Write your password!");
            } else if(this.state.password.length < 6){
                alert("Password must have at least 6 characters!")
            }else{
            firebase
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .then(() => {
                this.props.navigation.navigate('StartScreen');
            })
            .then(({user}) => {
                firestore().collection("users").doc(user.uid).set({});
            })
            .catch( (error) => {
                var errorCode = error.code;
                if(errorCode == 'auth/invalid-email')
                    alert("Invalid Email!");
                else if(errorCode == 'auth/email-already-in-use') 
                    alert("Email already exists!");
                else if(errorCode == 'auth/wrong-password') 
                    alert("Wrong Password!"); 
              });
            } 
        }catch(error){
            console.log(error.toString());
        }
    }

    render(){
        return(
        <SafeAreaView style = {styles.container}>
            <Image style={styles.logo} source={require('../assets/lgrg.png')}/>
           
            <TextInput style={{top: -20, height: 50, width: 300, justifyContent: 'center', backgroundColor: 'white', borderRadius: 15}}
                       placeholder=" Email" 
                       placeholderTextColor="#771D98"
                       autoCapitalize="none"
                       onChangeText={(email) => this.setState({email})}
                       
            />
            <TextInput style={{top: -10, height: 50, width: 300, justifyContent: 'center', backgroundColor: 'white', borderRadius: 15}}
                       placeholder=" Password" 
                       placeholderTextColor="#771D98"
                       secureTextEntry={true}
                       onChangeText={(password) => this.setState({password})}
            />
            <TouchableOpacity onPress={() => this.signUpUser(this.state.email, this.state.password)} style={ [styles.buttonContainer, {top: 30, backgroundColor: 'white', borderWidth: 5, borderColor: '#771D98' }]}>
                <Text style={{textAlign: 'center', fontSize: 28, top: 0, color: '#771D98', fontWeight: 'bold'}}>Register</Text>
            </TouchableOpacity> 

            <Text style={{top: 40, color:"#771D98", fontWeight:'bold',fontSize:20}}>or with</Text>

            <View style={{flexDirection:'row'}} >
                <Image style={{width:50,height:50,position:'center',top:48, marginHorizontal:10}} source={require('../assets/fb.png')}/>
                <Image style={{width:50,height:50,position:'center',top:48}} source={require('../assets/gm.png')}/>
            </View>
        </SafeAreaView>
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
        top: 30,
        height: 50,
        width: 300,
        justifyContent: 'center',
        backgroundColor: '#771D98',
        borderRadius: 25,
     }
});
