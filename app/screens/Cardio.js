import React from 'react';
import {StyleSheet, View, TouchableOpacity, ImageBackground} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Cardio({navigation}){
    return(
       
             <View style={{flex:1}}>
             <ImageBackground source={require('../assets/banners/exercises/c1.gif')} style={styles.image}>

             <View style={{flexDirection:'row', top:-350}}>
                <TouchableOpacity style={styles.categoryBtn}>
                    <View>
                     <MaterialIcons onPress={()=>navigation.navigate('Exercises')} name="arrow-back" size={40} color="#771D98"/>
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
      categoryBtn: {
        marginHorizontal: 15,
        alignSelf:'center'
    }
    
})