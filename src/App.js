/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";

import MyBanner from "./components/Header";

const todos = [
  {
    id: 0,
    todo: "Ev temizlenecek",
    isDone: false,
  },
  {
    id: 1,
    todo: "Alışveriş yapılacak",
    isDone: false,
  },
  {
    id: 2,
    todo: "Araba yıkanacak",
    isDone: false,
  },
];

const App = () => {

  var todo_num = todos.length;


  return (
    <SafeAreaView style={[styles.container, { flex: 1 }]}>
      <View style={{ flexDirection: "row" }}>
        <Text style={[styles.header, { flex: 1 }]}>TODO</Text>
        <Text style={[styles.todo_count]}>{todo_num}</Text>
      </View>
      <View style={{ flex: 7 }}>
        {todos.map((item) => {
          return (<MyBanner todo={item.todo}
          // isDone={item.isDone} 
          />)
        })}
      </View>

      <View style={{ flex: 2 }}>
        <View style={styles.bottom_container}>
          <TextInput style={styles.textInput} />
          <TouchableOpacity
            style={styles.todo_add_button}>
            <Text style={styles.button_text}>ADD TODO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#37474F",
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    color: "orange",
    margin: 5,
    // backgroundColor:"red"
  },
  todo_count: {
    fontSize: 30,
    color: "orange",
    alignSelf: "center",
    margin: 10,
    // backgroundColor:"yellow"
  },
  todos: {
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#CFD8DC",
    borderRadius: 5,
    margin: 10,
    padding: 7,
    color: "black"
  },
  bottom_container: {
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#CFD8DC",
    borderRadius: 15,
    margin: 10,
  },
  textInput: {
    margin: 20,
    padding: 9,
    borderRadius: 10,
    backgroundColor: "white",
  },
  todo_add_button: {
    marginBottom: 10,
    padding: 5,
    width: 200,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#37474F",
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  button_text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default App;
