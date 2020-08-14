import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  Button,
  Platform,
} from "react-native";
import Header from "./components/Header";
import Input from "./components/Input";
import ItemDisplay from "./components/ItemDisplay";

export default function App() {
  var [text, setText] = useState("");
  var initialList = [
    { id: 0, title: "Hello World", content: "Hello World", selected: false },
    { id: 1, title: "Hello World2", content: "Hello World2", selected: true },
  ];
  var [listText, setList] = useState(initialList);

  function handleAdd() {
    let lText = initialList;
    lText.unshift({
      id: listText.length + 1,
      title: text,
      content: text,
      selecte: false,
    });
    setList(lText);
    setText("");
  }
  return (
    <View style={styles.container}>
      <View style={styles.emptybar}></View>

      <Header title="Hello World" />

      <Input textChange={(temp) => setText(temp)} text={text} />

      <TouchableOpacity style={styles.button}>
        <Button onPress={handleAdd} title="Add Element" color="#841583" />
      </TouchableOpacity>

      <FlatList
        data={listText}
        extraData={listText}
        renderItem={({ item, index }) => {
          return <ItemDisplay temp={item} />;
        }}
        keyExtractor={(item, index) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#841584",
    padding: 10,
    borderRadius: 15,
    marginBottom: 80,
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "American Typewriter",
  },
  emptybar: {
    height: 20,
    backgroundColor: "#FFCE00",
  },
});
