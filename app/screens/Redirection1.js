import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Redirection1({navigation}){
    return (
      <View style={{flex:1}}>
        <WebView
          source={{ uri: 'https://www.chloeting.com/program/' }}
        />

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BodyBld')}>
          <Text style={{textAlign: 'center', color: 'white',fontWeight:'bold',fontSize:20}}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  button: {
    padding: 20, 
    backgroundColor: '#771D98', 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});
