import React from 'react';
import {StyleSheet, View, Image, Text,SafeAreaView,TouchableOpacity} from 'react-native';
import {ImageHeaderScrollView,TriggeringView} from 'react-native-image-header-scroll-view';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Breakfast1_2({navigation}){
        return (
          <ImageHeaderScrollView
            maxHeight={400}
            minHeight={90}
            maxOverlayOpacity={0.6}
            minOverlayOpacity={0.3}
            headerImage={require("../assets/banners/breakfast1_2.jpg")}
            renderForeground={() => (
              <SafeAreaView style={{ height: 250, justifyContent: "flex-start", alignItems: "center"}}>
                  <Text style={{ backgroundColor: 'transparent', color:'white', fontWeight:'bold', fontSize:30}}>Gluten-Free Vegan Granola</Text>
                  
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
                <Text>- Place the oats, dates, coconut oil, maple syrup and salt in a food processor.{'\n'}
                      - Whizz until you get a fairly smooth and firm dough.{'\n'}
                      - Line a large rectangular baking tray with baking paper.{'\n'}
                      - Use your fingers to crumble the mixture onto the baking paper, making sure it’s mostly separated but still keeping some clumps.{'\n'}
                      - Add the flaked almonds and pecan nuts and mix well.{'\n'}
                      - Bake in the oven for 10-15 minutes, or until golden brown and crispy.{'\n'}
                </Text>
                <Text style={{fontWeight:'bold'}}>Tip 1:  Make sure the mixture is spread out well, otherwise it won’t get crispy{'\n'}
                                                  Tip 2:  Mix it around halfway through.{'\n'}
                                                  Tip 3:  Leave to cool completely (still spread out on the baking tray) before putting away to store.{'\n'}
                </Text> 
                <Text style={{fontWeight:'bold'}}>HOW LONG DOES THIS GLUTEN-FREE VEGAN GRANOLA KEEP FOR?</Text> 
                <Text>This Granola keeps in an airtight container for up to 5 days.{'\n'}</Text>
                <Text style={{fontWeight:'bold'}}>INGREDIENTS</Text>
                <Text>1. 150 g (1 ½ cups) rolled oats{'\n'}
                      2. 130 g (¾ cup) pitted dates{'n'} 
                      3. 30 g (⅛ cup) coconut oil (or sub olive or vegetable oil){'\n'}
                      4. 4 tablespoons maple syrup or sub any other sweetener{'\n'}
                      5. Pinch salt to taste{'\n'}
                      6. 30 g (¼ cup) flaked almonds{'\n'}
                      7. 30 g (¼ cup) pecan nuts , roughly chopped{'\n'}</Text>
                      <ImageHeaderScrollView maxHeight={400} minHeight={90} 
                        renderForeground={() => (
                            <View>
                              <Image source={require('../assets/banners/meals/gr.jpeg')} style={{alignSelf:'center', justifyContent:'center', width:400, height:400}} />
                            </View> 
                            
                        )}
                     />
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