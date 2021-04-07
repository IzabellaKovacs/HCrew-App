import React from 'react';
import {StyleSheet, View, TouchableOpacity, ImageBackground} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Legs1({navigation}){
    return(
       
             <View style={{flex:1}}>
             <ImageBackground source={require('../assets/banners/exercises/bb.gif')} style={styles.image}>

             <View style={{flexDirection:'row', top:-350}}>
                <TouchableOpacity style={{marginHorizontal:10}}>
                    <View>
                     <MaterialIcons onPress={()=>navigation.navigate('BodyBld')} name="arrow-back" size={40} color="#771D98"/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{marginHorizontal:320,width:400}}>
                    <View>
                     <MaterialIcons onPress={()=>navigation.navigate('Legs2')} name="arrow-forward" size={40} color="#771D98" />
                    </View>
                </TouchableOpacity>
            </View>
               
             </ImageBackground>
           </View>
    
    )
}

const styles = StyleSheet.create({
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
    
})