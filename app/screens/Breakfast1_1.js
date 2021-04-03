import React from 'react';
import {StyleSheet, View, Image, Text,SafeAreaView,TouchableOpacity} from 'react-native';
import {ImageHeaderScrollView,TriggeringView} from 'react-native-image-header-scroll-view';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Breakfast1_1({navigation}){
        return (
          <ImageHeaderScrollView
            maxHeight={400}
            minHeight={90}
            maxOverlayOpacity={0.6}
            minOverlayOpacity={0.3}
            headerImage={require("../assets/banners/breakfast1_1.jpeg")}
            renderForeground={() => (
              <SafeAreaView style={{ height: 250, justifyContent: "flex-start", alignItems: "center"}}>
                  <Text style={{ backgroundColor: 'transparent', color:'white', fontWeight:'bold', fontSize:30}}>Quinoa Pancakes</Text>
                  
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
                <Text> These Quinoa Pancakes are thick, fluffy, perfectly chewy and super easy to make and are a great source of protein and fibre.
                {'\n\n'}</Text>
                <Text style={{fontWeight:'bold'}}>How do you make quinoa flour?</Text> 
                <Text>Although you can buy quinoa flour, you can make your own because it’s much cheaper and it’s so easy to make.{'\n'}</Text>
                <Text>1. Place the quinoa in a blender.{'\n'}2. Whizz until you get a fine powder.{'\n\n'}</Text>
                <Text style={{fontWeight:'bold'}}>HOW TO MAKE THIS RECIPE</Text> 
                <Text>- Transfer the quinoa flour and oat flour into a glass mixing bowl and mix together with all the other ingredients.{'\n'}</Text>
                <Text style={{fontWeight:'bold'}}>Tip 1:  Use a measuring jug to measure out the plant-based milk.{'\n'}Tip 2:  Cook the pancakes as soon as possible after making the batter, otherwise the oat flour will soak up liquid and the batter will become too thick!{'\n'}</Text> 
                <Text>- Heat up a tiny bit of oil in a frying pan (non-stick is best) and add a few tablespoons of the pancake batter.{'\n'}</Text>
                <Text style={{fontWeight:'bold'}}>Tip 3:  Control the amount of oil you use by rubbing a piece of greased kitchen paper over the bottom of the frying pan – too much oil will make the pancakes ragged at the edges, and too little will make them hard to flip over.{'\n'}</Text>
                <Text>- Cook on a low-medium heat for a few minutes until you see little bubbles appear on the surface and the bottom of the pancake comes away easily from the pan.{'n'}- Flip over and cook for another few minutes, until golden brown on both sides.{'\n'}</Text>
                <ImageHeaderScrollView maxHeight={400} minHeight={90} 
                        renderHeader={() => <Image source={require('../assets/banners/meals/pck.jpeg')} style={{alignSelf:'center', justifyContent:'center', width:400, height:400}} />} 
                />
                <Text style={{fontWeight:'bold', top:-280}}>SUBSTITUTIONS YOU CAN MAKE</Text>
                <Text style={{top:-280}}>1. If you want to use quinoa flour instead of making your own, you can use 75 g (⅔ cup) quinoa flour.{'\n'}
                                         2. If you want to use oat flour instead of making your own, you can use 75 g (⅔ cup) oat flour.{'\n'}
                                         3. You can use any type of plant-based milk: almond milk, rice milk, soy milk, cashew milk, oat milk etc.{'\n'}
                                         4. You can use any type of liquid sweetener: maple syrup, agave syrup, brown rice syrup etc.{'\n'}
                                         5. You can omit the maple syrup to make these free from sugar.{'\n'}
                                         6. You can replace the apple cider vinegar with lemon juice.{'\n'}
                                         7. You can use any type of oil to fry the pancakes: coconut oil, olive oil or vegetable oil.{'\n'}
                                         8. To make them nut-free, use a nut-free plant-based milk.{'\n'}
                </Text>
                <Text style={{fontWeight:'bold',top:-280}}>INGREDIENTS YOU CAN ADD TO THE PANCAKE BATTER</Text>
                <Text style={{top:-280}}>Desiccated coconut.{'\n'}
                      Chocolate chips.{'\n'}
                      Ground cinnamon.{'\n'}
                      Fresh or frozen berries: blueberries, raspberries etc.{'\n'}</Text>
                <Text style={{fontWeight:'bold', top: -260}}>INGREDIENTS</Text>
                <Text style={{top:-260}}>1. 75 g (⅓ cup) quinoa{'\n'}
                      2. 75 g (¾ cups) oats{'\n'}
                      3. 2 tablespoons maple syrup (or sub any other sweetener){'\n'} 
                      4. 1 tablespoon apple cider vinegar {'\n'}
                      5. 2 heaped teaspoons baking powder {'\n'}
                      6. ¼ teaspoon bicarbonate of soda (baking soda) {'\n'}
                      7. 185 ml (¾ cup) unsweetened almond milk (or sub any other plant-based milk){'\n\n'}
                      For frying: Coconut oil (or sub vegetable oil)
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