import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Input = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Type here!"
        onChangeText={(text) => props.textChange(text)}
        value={props.text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    margin: 5,
    width: "100%",
  },
  input: { height: 40, fontSize: 20 },
});

export default Input;
