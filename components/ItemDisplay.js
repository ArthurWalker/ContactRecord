import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

const ItemDisplay = (props) => {
  function viewContent() {
    Alert.alert(props.temp.content);
  }
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <Text
        style={
          props.temp.selected
            ? styles.contentSelected
            : styles.contentNotSelected
        }
        onPress={viewContent}
      >
        {props.temp.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {},
  contentSelected: {
    backgroundColor: "#AAAAAA",
    marginBottom: 10,
    paddingLeft: 10,
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentNotSelected: {
    backgroundColor: "#FFCE00",
    marginBottom: 10,
    paddingLeft: 10,
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ItemDisplay;
