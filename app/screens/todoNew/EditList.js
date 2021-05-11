import { CommonActions } from "@react-navigation/native";
import React, {useState} from "react";
import {StyleSheet,Text,View,TouchableOpacity,TextInput} from "react-native";
import Colors from "../../constants/Colors";
import ColorSelector from '../components/ColorSelector';

const colorList = ["purple1","purple2","purple3","alfa_purple"];

export default ({navigation,route}) => {
    const [title,setTitle] = useState(route.params.title || "");
    const [color,setColor] = useState(route.params.color || Colors.alfa_purple);

    return(
        <View style={styles.container}>
            <View>
                <TextInput 
                    selectionColor={"transparent"}
                    autoFocus={true}
                    value={title} 
                    onChangeText={setTitle}
                    placeholder={"Todo Name"}
                    maxLength={30}
                    style={styles.input}
                />
                <ColorSelector
                    onSelect={(color) => {
                        setColor(color);
                        navigation.dispatch(CommonActions.setParams({color}))
                        }} 
                    selectedColor={color}
                    colorOptions={colorList}
                />
            </View>  
            
            <TouchableOpacity style={styles.saveButton} onPress={() => {
                if (title.length > 1) {
                    route.params.saveChanges({title,color});
                    navigation.dispatch(CommonActions.goBack());
                } 
            }}>
                <Text style={{color:"white",fontSize:24,fontWeight:"600"}}>Save</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        justifyContent:"space-between",
        backgroundColor:"#fff"
    },
    input: {
        color:"gray",
        borderBottomColor: Colors.alfa_purple,
        borderBottomWidth: 0.5,
        marginHorizontal: 5,
        padding: 3,
        height: 30,
        fontSize: 24,
    },
    saveButton: {
        borderRadius: 25,
        backgroundColor: "gray",
        height: 48,
        margin: 16,
        justifyContent: "center",
        alignItems: "center"
    }
})