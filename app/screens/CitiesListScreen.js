import React from 'react';
import { View, FlatList, StyleSheet,SafeAreaView,TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {data} from './data';
import City from './City';

const CitiesListScreen = ({navigation}) => {

    const renderItem = ({item}) => {
        return (
            <City 
                itemData={item}
                onPress={()=> navigation.navigate('CityDetails', {itemData: item})}
            />
        );
    };

    return (
      <SafeAreaView style={styles.container}>

        <TouchableOpacity style={styles.categoryBtn}>
                <View>
                   <MaterialIcons onPress={()=>navigation.navigate('StartScreen')} name="arrow-back" size={40} color="#771D98"/>
                </View>
        </TouchableOpacity>

          <View style={styles.cardsWrapper}>
            <FlatList 
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
          </View>  
      </SafeAreaView>
    );
};

export default CitiesListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor:'#E7CDEA'
  },
  categoryBtn: {
    marginHorizontal:15
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
},
});