import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity, TextInput} from 'react-native';

export default function LoginScreen({navigation}) {
    return(
        <View style = {styles.container}>
            <Image style={styles.logo} source={require('../assets/lgrg.png')}/>
            <TextInput style={{top: -30, height: 50, width: 300, justifyContent: 'center', backgroundColor: 'white', borderRadius: 15}}
                       placeholder=" Username" 
                       placeholderTextColor="#771D98"
            />
            <TextInput style={{top: -20, height: 50, width: 300, justifyContent: 'center', backgroundColor: 'white', borderRadius: 15}}
                       placeholder=" Email" 
                       placeholderTextColor="#771D98"
            />
            <TextInput style={{top: -10, height: 50, width: 300, justifyContent: 'center', backgroundColor: 'white', borderRadius: 15}}
                       placeholder=" Password" 
                       placeholderTextColor="#771D98"
            />
            <TouchableOpacity style={ [styles.buttonContainer, {top: 30, backgroundColor: 'white', borderWidth: 5, borderColor: '#771D98' }]}>
                <Text onPress={() => navigation.navigate('LoginScreen')} style={{textAlign: 'center', fontSize: 28, top: 0, color: '#771D98', fontWeight: 'bold'}}>Register</Text>
            </TouchableOpacity>

            <Text style={{top: 40, color:"#771D98", fontWeight:'bold',fontSize:20}}>or with</Text>

            <View style={{flexDirection:'row'}} >
                <Image style={{width:50,height:50,position:'center',top:48, marginHorizontal:10}} source={require('../assets/fb.png')}/>
                <Image style={{width:50,height:50,position:'center',top:48}} source={require('../assets/gm.png')}/>
            </View>
        </View>
    );
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
        top: 40,
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

