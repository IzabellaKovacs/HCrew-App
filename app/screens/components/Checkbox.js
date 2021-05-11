import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";

export default ({isChecked, onChecked, ...props}) => {
    return(
        <TouchableOpacity style={styles.checkbox} onPress={onChecked}>
            <Text style={{color: "gray"}}>{isChecked ? "✓" : ""}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    checkbox: {
      width: 20,
      height: 20,
      margin: 5,
      backgroundColor: "#fff0",
      color: "black",
      borderWidth: 1,
      borderRadius: 3,
      borderColor: "gray",
      alignItems: "center",
      justifyContent: "center",
    },
  });