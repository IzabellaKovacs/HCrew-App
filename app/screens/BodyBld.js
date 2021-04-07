import React from 'react';
import {StyleSheet, View, TouchableOpacity,Text,Image,SafeAreaView, Button} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function BodyBld({navigation}){
    return(
        <SafeAreaView style={styles.container}>

        <View style={{flexDirection:'row', marginTop:15}}>
            <TouchableOpacity style={styles.categoryBtn}>
                <View>
                 <MaterialIcons onPress={()=>navigation.navigate('Exercises')} name="arrow-back" size={50} color="#771D98"/>
                </View>
            </TouchableOpacity>
        </View>

            <View style={styles.categoryContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate('Legs1')}>
                <View style={styles.categoryIcon}>
                   <Image source={require('../assets/banners/legs.png')} style={{width:100,height:100}}/>
                </View>
                </TouchableOpacity>
            </View>

            <View style={styles.categoryContainer}>
                <TouchableOpacity>
                <View style={styles.categoryIcon}>
                <Image source={require('../assets/banners/arms.png')} style={{width:90,height:90}}/>
                </View>
                </TouchableOpacity>
            </View>

            <View style={styles.categoryContainer}>
               <TouchableOpacity>
                <View style={styles.categoryIcon}>
                <Image source={require('../assets/banners/abs.png')} style={{width:100,height:100}}/>
                </View>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.buttonContainer}>
                 <Text onPress={()=>navigation.navigate('Redirection1')} style={{color:'white',fontSize:23,fontWeight:'bold',fontStyle:'italic',alignSelf:'center'}}>Body Program & Meals by Chole Ting</Text>
            </TouchableOpacity>

        </SafeAreaView>

       
    );
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#E7CDEA',
        flex:1,
    },
    categoryContainer: {
        alignSelf:'center',  
        marginHorizontal: 10,
        flexDirection:'row',
    },
    categoryIcon: {
        borderWidth: 10,
        borderColor:'#771D98',
        alignItems:'center',
        justifyContent:'center',
        width:150,
        height:150,
        backgroundColor:'white',
        borderRadius:80,
        marginTop:30
    },
    categoryBtn: {
        marginHorizontal: 25,
        flex:1,
    },
    buttonContainer: {
        height: 100,
        width: 420,
        justifyContent: 'center',
        backgroundColor: '#771D98',
        borderRadius: 50,
        top:30,
        alignSelf:'center'
     }
})