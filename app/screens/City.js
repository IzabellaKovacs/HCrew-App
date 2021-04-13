import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const City = ({itemData, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>

    <View style={styles.cardsWrapper}>

      <View style={styles.card}>
        <View style={styles.cardInfo}>
           <Text style={styles.cardTitle}>{itemData.title}</Text>
        </View>
      </View>
    
    </View>
    </TouchableOpacity>
  );
};

export default City;

const styles = StyleSheet.create({
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 150,
        marginVertical: 5,
        flexDirection:'row',
        shadowColor: 'purple',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity:0.5,
        shadowRadius: 15,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: 'white',
        borderWidth: 5,
        borderRadius:25,
        backgroundColor:'white',
    },
    cardTitle: {
        alignSelf: 'center',
        fontSize: 28,
        color: '#771D98',
        fontWeight: 'bold',
        top: 40
    }
});