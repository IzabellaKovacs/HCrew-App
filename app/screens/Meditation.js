import * as React from 'react';
import { View, StyleSheet, Button, ImageBackground,TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default function Meditation({navigation}) {
  const [sound, setSound] = React.useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
       require('../assets/meditate.mp3')
    );
    setSound(sound);

    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return (
    <View style={{flex:1}}>

            <View style={{flex:1}}>
                <ImageBackground source={require('../assets/banners/med.jpeg')} style={styles.image}>
                <View style={{flexDirection:'row',top:-350}}>
                    <TouchableOpacity style={styles.categoryBtn}>
                        <View>
                            <MaterialIcons onPress={()=>navigation.navigate('Losew')} name="arrow-back" size={40} color="#771D98"/>
                        </View>
                    </TouchableOpacity>
                </View>
                    <Button title="Play Sound" color="white" justifyContent='center' onPress={playSound}/>
                </ImageBackground>
             </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  categoryBtn: {
    marginHorizontal: 15,
    alignSelf:'center'
},
});
