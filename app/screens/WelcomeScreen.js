import React from 'react';
import {StyleSheet, Image, Text, TouchableOpacity,SafeAreaView, View} from 'react-native';

export default function WelcomeScreen({navigation}){
    return(
        <SafeAreaView style = {styles.container}> 
            <Image style = {styles.logo} source={require('../assets/reee.png')} />
       
                <Text style = {styles.titletext}>HCREW</Text>
               
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text onPress={() => navigation.navigate('LoginScreen')} style={{textAlign: 'center', fontSize: 28, top: 0, color: 'white', fontWeight: 'bold'}}>Log in</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ [styles.buttonContainer, {top:60,backgroundColor: 'white', borderWidth: 5, borderColor: '#771D98' }]}>
                    <Text onPress={() => navigation.navigate('RegisterScreen')} style={{textAlign: 'center', fontSize: 28, top: 0, color: '#771D98', fontWeight: 'bold'}}>Register</Text>
                </TouchableOpacity>
               
        </SafeAreaView>
    );
    }
    
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E7CDEA',
        alignItems: 'center',
        flex:1,
        justifyContent:"center"
    },
    logo: {
        width: 300, 
        height: 300,
        position: 'relative',
        top:-60
    },
    titletext: {
       fontSize: 80,
       fontWeight: 'bold',
       color: '#291336',
       top:-30
    },
    buttonContainer: {
        height: 50,
        width: 300,
        justifyContent: 'center',
        backgroundColor: '#771D98',
        borderRadius: 25,
        top:50
     },
});
