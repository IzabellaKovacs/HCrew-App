import React from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity,SafeAreaView} from 'react-native';
import {ImageHeaderScrollView,TriggeringView} from 'react-native-image-header-scroll-view';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CityDetails = ({route,navigation}) => {
  const itemData = route.params.itemData;

  return (
    
    <ImageHeaderScrollView
        maxHeight={400}
        minHeight={90}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.3}
        renderHeader={() => (
          <Image source={itemData.image} style={styles.image} />
        )}
        renderForeground={() => (
          <SafeAreaView style={styles.titleContainer}>

            <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={styles.categoryBtn}>
                <View>
                  <MaterialIcons onPress={()=>navigation.navigate('CitiesListScreen')} name="arrow-back" size={40} color="white"/>
                </View>
              </TouchableOpacity>
            </View>

            <Text style={styles.imageTitle}>{itemData.title}</Text>
          </SafeAreaView>
        )}
    >

        <TriggeringView style={styles.section}>
        </TriggeringView>

        <View style={[styles.section, styles.sectionLarge]}>
          <Text style={styles.sectionContent1}>{itemData.client1}</Text>
            <Text style={styles.sectionContent2}>{itemData.client1description1}</Text>
              <Text style={styles.sectionContent3}>{itemData.client1description2}</Text>
          <Text style={styles.sectionContent1}>{'\n'}{itemData.client2}</Text>
            <Text style={styles.sectionContent2}>{itemData.client2description1}</Text>
              <Text style={styles.sectionContent3}>{itemData.client2description2}</Text>
          <Text style={styles.sectionContent1}>{'\n'}{itemData.client3}</Text>
            <Text style={styles.sectionContent2}>{itemData.client3description1}</Text>
              <Text style={styles.sectionContent3}>{itemData.client3description2}</Text>
        </View>

      </ImageHeaderScrollView>
  );
};

export default CityDetails;

const styles = StyleSheet.create({
  image: {
    height: 400,
    width: '100%' ,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent1: {
    fontSize: 20,
    textAlign: 'justify',
    fontWeight:'bold',
    color:'#771D98'
  },
  sectionContent2: {
    fontSize: 16,
    textAlign: 'justify',
  },
  sectionContent3: {
    fontSize: 20,
    textAlign: 'justify',
    fontWeight:'bold',
    color:'#771D98'
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight:'bold',
    marginVertical:100
  },
  sectionLarge: {
    minHeight: 300,
  },
   categoryBtn: {
    marginHorizontal: 15,
    flex:1,
    alignSelf:'center'
},
});