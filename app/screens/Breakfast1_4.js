import React from 'react';
import {StyleSheet, View, Image, Text,SafeAreaView,TouchableOpacity} from 'react-native';
import {ImageHeaderScrollView,TriggeringView} from 'react-native-image-header-scroll-view';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Breakfast1_4({navigation}){
        return (
          <ImageHeaderScrollView
            maxHeight={400}
            minHeight={90}
            maxOverlayOpacity={0.6}
            minOverlayOpacity={0.3}
            headerImage={require("../assets/banners/breakfast1_4.jpeg")}
            renderForeground={() => (
              <SafeAreaView style={{ height: 250, justifyContent: "flex-start", alignItems: "center"}}>
                  <Text style={{ backgroundColor: 'transparent', color:'white', fontWeight:'bold', fontSize:30}}>Gluten-Free Vegan Biscuits</Text>
                  
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
                <Text>1. 150 g (1 ¼ cup) ground almonds (almond meal) {'\n'}
                      2. 150 g (1 ¼ cup) gluten-free flour blend plus more for rolling (or sub plain flour if not gluten-free){'\n'}
                      3. 2 heaped teaspoons baking powder{'\n'}
                      4. ¼ teaspoon bicarbonate of soda (baking soda){'\n'}
                      5. ¼ teaspoon salt to taste{'\n'}
                      6. 1 tablespoon apple cider vinegar{'\n'}
                      7. 1 tablespoon maple syrup (or sub any other similar sweetener){'\n'}
                      8. 150 ml (⅔ cup) unsweetened almond milk (or any other plant-based milk){'\n'}
                </Text>
                <Text>- Preheat oven to 180 degrees Celsius (350 degrees Fahrenheit).{'\n'}
                      - Place all the ingredients in a bowl and mix well (no need to sift in the flour) – add the milk a little bit at a time until you get a dough that’s firm enough to mould easily. You can also add a tiny splash more milk if it’s looking too dry.{'\n'}
                      - Lay out a sheet of baking paper on a flat surface and sprinkle with flour.{'\n'}
                      - Place the dough on the baking paper, and using a bit more flour, shape it into a flat rectangular shape with a thickness of around 3 cm (1 ¼ inch) – no need to use a rolling pin!{'\n'}
                      - Use a cookie cutter to cut out circular biscuits from the dough (you should be able to make 7 biscuits) – you will have to reshape the dough a few times until you use it all up.{'\n'}
                      - Transfer the biscuits onto a baking tray lined with greased baking paper.{'\n'}
                      - If you wish, use a pastry brush or your fingertips to brush the tops of the biscuits with almond milk.{'\n'}
                      - Bake in the oven for 15-20 minutes until browned and an inserted skewer comes out clean.{'\n'}
                      - Leave to cool slightly before slicing in half to eat – see notes for serving suggestions.{'\n'}
                      - Taste best when fresh, but keep covered in the fridge for up to a few days – best reheated by slicing in half and putting in the toaster.{'\n'}
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