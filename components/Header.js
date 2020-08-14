import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 30,
    backgroundColor: "#FFCE00",
  },
  title: {
    marginBottom: 50,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Header;
