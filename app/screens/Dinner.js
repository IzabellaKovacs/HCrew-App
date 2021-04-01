import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Dinner({navigation}){
    return (
        <SafeAreaView>

            <Text style={{textAlign: 'center', fontSize: 28, top: 0, color: '#771D98', fontWeight: 'bold'}}>Dinner</Text>
             
            <View style={{flexDirection:'row', marginTop:15}}>
                <TouchableOpacity style={styles.categoryBtn}>
                    <View>
                     <MaterialIcons onPress={()=>navigation.navigate('Meals')} name="arrow-back" size={40} color="#771D98"/>
                    </View>
                </TouchableOpacity>
            </View>

                <View style={styles.cardsWrapper}>

                    <View style={styles.card}>
                        <View style={styles.cardImgWrapper}>
                            <Image source={require('../assets/banners/dinner1_1.jpeg')} resizeMode='cover' style={styles.cardImg}/>
                        </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>Gluten-Free Vegan Wraps</Text>
                    </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.cardImgWrapper}>
                            <Image source={require('../assets/banners/dinner1_2.jpg')} resizeMode='cover' style={styles.cardImg}/>
                        </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>Spicy Tofu (Vegan + Gluten-Free)</Text>
                    </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.cardImgWrapper}>
                            <Image source={require('../assets/banners/dinner1_3.jpeg')} resizeMode='cover' style={styles.cardImg}/>
                        </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>Vegan Mushroom Pâté</Text>
                    </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.cardImgWrapper}>
                            <Image source={require('../assets/banners/dinner1_4.jpeg')} resizeMode='cover' style={styles.cardImg}/>
                        </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>Zucchini Soup (Vegan)</Text>
                    </View>
                    </View>

                </View>

            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    categoryBtn: {
        marginHorizontal: 85,
        flex:1,
        alignSelf:'center'
    },
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 170,
        marginVertical: 8,
        flexDirection:'row',
        shadowColor: '#999',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity:0.5,
        shadowRadius: 15,
    },
    cardImgWrapper: {
        flex:3
    },
    cardImg: {
        height:'100%',
        width:'100%',
        alignSelf:'center',
        borderRadius: 8,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor:'white'
    },
    cardTitle: {
        alignSelf: 'center',
        fontSize: 20,
        color: '#771D98',
        fontWeight: 'bold',
        top: 40
    }
})
