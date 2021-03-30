import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Swiper from 'react-native-swiper';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function StartScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.sliderContainer}>
                <Swiper autoplay>
                    <View>
                        <Image source={require('../assets/banners/3.jpg')}
                            resizeMode="cover" style={styles.sliderImage}
                        />
                    </View>
                    <View>
                        <Image source={require('../assets/banners/2.jpg')}
                            resizeMode="cover" style={styles.sliderImage}
                        />
                    </View>
                    <View>
                        <Image source={require('../assets/banners/1.jpg')}
                            resizeMode="cover" style={styles.sliderImage}
                        />
                    </View>
                    <View>
                        <Image source={require('../assets/banners/4.jpg')}
                            resizeMode="cover" style={styles.sliderImage}
                        />
                    </View>
                    <View>
                        <Image source={require('../assets/banners/5.jpg')}
                            resizeMode="cover" style={styles.sliderImage}
                        />
                    </View>
                </Swiper>
            </View>

            <View style={styles.categoryContainer}>
                <TouchableOpacity style={styles.categoryBtn}>
                    <View style={styles.categoryIcon}>
                        <MaterialIcons name="restaurant" size={40} color="white" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.categoryBtn}>
                    <View style={styles.categoryIcon}>
                        <MaterialIcons name="fitness-center" size={40} color="white" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.categoryBtn}>
                    <View style={styles.categoryIcon}>
                        <MaterialIcons name="people" size={40} color="white" />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={{ textAlign: 'center', fontSize: 28, top: 0, color: 'white', fontWeight: 'bold' }}>My program</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonContainer, { top: 150, backgroundColor: 'white', borderWidth: 5, borderColor: '#771D98' }]}>
                    <Text style={{ textAlign: 'center', fontSize: 28, top: 0, color: '#771D98', fontWeight: 'bold' }}>My meal</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7CDEA',
    },
    sliderContainer: {
        height: 400,
        width: '90%',
        marginTop: 15,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        borderRadius: 8,
    },
    categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 25,
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 90,
        backgroundColor: '#771D98',
        borderRadius: 50,
    },
    categoryBtn: {
        marginHorizontal: 20,
        width: '30%',
        flex: 1,
        alignSelf: 'center'
    },
    buttonContainer: {
        top: 100,
        height: 50,
        width: 300,
        justifyContent: 'center',
        backgroundColor: '#771D98',
        borderRadius: 18,
    },
})