import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import Swiper from 'react-native-swiper';

export default function StartScreen({navigation}){
    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.sliderContainer}>
             <Swiper autoplay>
                <View>
                    <Image source={require('../assets/banners/3.jpg')}
                           resizeMode="cover" style={styles.sliderImage}/>
                </View>
                <View>
                    <Image source={require('../assets/banners/2.jpg')}
                           resizeMode="cover" style={styles.sliderImage}/>
                </View>
                <View>
                    <Image source={require('../assets/banners/1.jpg')}
                           resizeMode="cover" style={styles.sliderImage}/>
                </View>
                <View>
                    <Image source={require('../assets/banners/4.jpg')}
                           resizeMode="cover" style={styles.sliderImage}/>
                </View>
                <View>
                    <Image source={require('../assets/banners/5.jpg')}
                           resizeMode="cover" style={styles.sliderImage}/>
                </View>
             </Swiper>    
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

})