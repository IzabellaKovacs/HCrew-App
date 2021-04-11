import React from 'react';
import {View,SafeAreaView,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default function Losew({navigation}){
    return(
        <SafeAreaView style={styles.container}>
        <ScrollView>
            <TouchableOpacity style={styles.categoryBtn}>
                <View>
                   <MaterialIcons onPress={()=>navigation.navigate('Exercises')} name="arrow-back" size={40} color="#771D98"/>
                </View>
            </TouchableOpacity>
        

           <Text style={styles.textContainerSteps}>Step 1</Text> 
           <View style={{flexDirection:'row'}}>
            <MaterialIcons name="restaurant" size={40} color="black"/>
            <Text style={styles.textContainer}>Eat healthy</Text>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text onPress={() => navigation.navigate('Meals')} style={{textAlign: 'center', fontSize: 25, top: 0, color: 'white', fontWeight: 'bold'}}>Meals</Text>
                </TouchableOpacity>
           </View>
           <View style={{flexDirection:'row'}}>
            <MaterialIcons name="invert-colors" size={40} color="black"/>
            <Text style={styles.textContainer}>Hydrate yourself</Text>
           </View>
          
           <Text style={styles.textContainerSteps}>Step 2</Text>
           <View style={{flexDirection:'row'}}>
            <MaterialIcons name="fitness-center" size={40} color="black"/>
            <Text style={styles.textContainer}>Exercise</Text>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text onPress={() => navigation.navigate('Exercises')} style={{textAlign: 'center', fontSize: 25, top: 0, color: 'white', fontWeight: 'bold'}}>Exercises</Text>
                </TouchableOpacity>
           </View>
                <Text style={styles.subText}>Week 1:{'\n'} Cardio (3 times){'\n'} Body Build (after Cardio) </Text>
                <Text style={styles.subText}>Week 2:{'\n'} Cardio (3 times){'\n'} Body Build (after Cardio) </Text>
                <Text style={styles.subText}>Week 3:{'\n'} Cardio (3 times){'\n'} Body Build (3 times) </Text>
                <Text style={styles.subText}>Week 4:{'\n'} Cardio (3 times){'\n'} Body Build (after Cardio) </Text>
                <Text style={styles.subText}>Week 5:{'\n'} Cardio (3 times){'\n'} Body Build (3 times) </Text>
                <Text style={styles.subText}>Repeat till you see the wanted results! </Text>

            <Text style={styles.textContainerSteps}>Step 2.1 (optional)</Text> 
            <View style={{flexDirection:'row'}}>
            <MaterialIcons name="park" size={40} color="black"/>
            <Text style={styles.textContainer}>Run / Exercise outside</Text>
           </View>

            <Text style={styles.textContainerSteps}>Step 3</Text> 
            <View style={{flexDirection:'row'}}>
                <MaterialIcons name="self-improvement" size={40} color="black"/>
                <Text style={styles.textContainer}>Meditate</Text>
                <TouchableOpacity style={styles.buttonContainer}>
                        <Text onPress={() => navigation.navigate('Meditation')} style={{textAlign: 'center', fontSize: 25, top: 0, color: 'white', fontWeight: 'bold'}}>Music</Text>
                    </TouchableOpacity>
           </View>

        </ScrollView>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#E7CDEA',
        flex:1
    },
    textContainerSteps:{
        fontSize:30,
        padding:10,
        fontWeight:'bold',
        color:'#771D98'
    },
    textContainer:{
        fontSize:28,
        marginHorizontal:20,
        flexDirection:'row',
        fontWeight:"500"
    },
    subText:{
        fontSize:25,
        padding:10
    },
    buttonContainer: {
        height: 45,
        width: 150,
        justifyContent: 'center',
        backgroundColor: '#771D98',
        borderRadius: 25,
     },
     categoryBtn: {
        marginHorizontal: 15,
        flex:1,
    },
})