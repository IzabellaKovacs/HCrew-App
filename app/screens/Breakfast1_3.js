import React from 'react';
import {StyleSheet, View, Image, Text,SafeAreaView,TouchableOpacity} from 'react-native';
import {ImageHeaderScrollView,TriggeringView} from 'react-native-image-header-scroll-view';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Breakfast1_3({navigation}){
        return (
          <ImageHeaderScrollView
            maxHeight={400}
            minHeight={90}
            maxOverlayOpacity={0.6}
            minOverlayOpacity={0.3}
            headerImage={require("../assets/banners/breakfast1_3.jpeg")}
            renderForeground={() => (
              <SafeAreaView style={{ height: 250, justifyContent: "flex-start", alignItems: "center"}}>
                  <Text style={{ backgroundColor: 'transparent', color:'white', fontWeight:'bold', fontSize:30}}>Vegan Granola Bars</Text>
                  
                  <View style={{flexDirection:'row', marginTop:15}}>
                  <TouchableOpacity style={styles.categoryBtn}>
                    <View>
                     <MaterialIcons onPress={()=>navigation.navigate('Breakfast')} name="arrow-back" size={40} color="white"/>
                    </View>
                  </TouchableOpacity>
                  </View>

              </SafeAreaView>
            )}
          >
             
             <TriggeringView style={styles.section}>
                <Text style={{top:5, fontSize:15}}>by Rhian' Recipes</Text>
              </TriggeringView>
             
              <View style={styles.container}>
                <Text style={{fontWeight:'bold'}}>INGREDIENTS</Text>
                <Text>1. 90 g (½ cup) pitted dates (soaked overnight in cold water or in boiling water for 10 minutes){'\n'}
                      2. 2 tablespoons smooth peanut butter (or sub almond butter or tahini){'\n'}
                      3. 3 tablespoons vegan protein powder (ensure gluten-free if necessary){'\n'}
                      4. 100 g (1 cup) rolled oats (ensure gluten-free if necessary){'\n'}
                      5. 60 ml (¼ cup) unsweetened almond milk (or sub any other plant-based milk){'\n'}
                </Text>
                <Text>- Place all the ingredients in a food processor.{'\n'}
                      - Blend until combined but still retaining some texture – it needs to be sticky enough to be able to easily stick together.{'\n'}
                      - Transfer the mixture to a loaf tin lined with greaseproof baking paper (I used a one-pound loaf tin).{'\n'}
                      - Smooth over the top, using the bottom of a glass.{'\n'}
                      - Decorate with chopped dried cranberries, if desired.{'\n'}
                      - Place in the fridge for at least 30 minutes for it to firm up before cutting.{'\n'}
                      - Remove from the loaf tin and cut into bars – you should be able to cut into 6 bars.{'\n'}
                      - Keeps covered in the fridge for a good few days.
                </Text>
              </View>

              </ImageHeaderScrollView>
        );
}

const styles = StyleSheet.create({
  section:{
    padding:20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor:'white'
  },
  container: {
    top:5,
    fontSize:20, 
    padding:15
  },
  categoryBtn: {
    marginHorizontal: 15,
    flex:1,
    alignSelf:'center'
},
})