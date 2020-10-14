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
  FlatList,
  KeyboardAvoidingView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const todo_list = [
  {
    key: 0,
    todo: "Ev temizlenecek",
    isDone: false,
  },
  {
    key: 1,
    todo: "Alışveriş yapılacak",
    isDone: false,
  },
  {
    key: 2,
    todo: "Araba yıkanacak",
    isDone: false,
  },
  {
    key: 3,
    todo: "React Native çalışılacak",
    isDone: false,
  },
  {
    key: 4,
    todo: "CSS tekrar edilecek",
    isDone: false,
  },
  {
    key: 5,
    todo: "HTML tekrar edilecek",
    isDone: false,
  },
  {
    key: 6,
    todo: "Java Script tekrar edilecek",
    isDone: false,
  },
  {
    key: 7,
    todo: "Python tekrar edilecek",
    isDone: false,
  },
  {
    key: 8,
    todo: "Projelere bakılacak",
    isDone: false,
  },
  {
    key: 9,
    todo: "Makale yazılacak",
    isDone: false,
  },
  {
    key: 10,
    todo: "Linkedin e bakılacak",
    isDone: false,
  },
  {
    key: 11,
    todo: "GitHub a bakılacak",
    isDone: false,
  },
  {
    key: 12,
    todo: "CodeChallenge lara bakılacak",
    isDone: false,
  },
];
// import MyBanner from "./components/MyBanner";

const App = () => {
  const [todos, setTodos] = useState(todo_list);

  const [input, setInput] = useState("");

  var todo_num = todos.length;

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todos) => todos.key != key);
    });
  };


  return (
    <SafeAreaView style={[styles.container, { flex: 1 }]}>
      <View style={{ flexDirection: "row" }}>
        <Text style={[styles.header, { flex: 1 }]}>TODO</Text>
        <Text style={[styles.todo_count]}>{todo_num}</Text>
      </View>

      <View style={{ flex: 7 }}>
        <FlatList
          keyExtractor={(item, index) => item.key.toString()}
          data={todos}
          renderItem={({ item }) => (
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={{ flex: 1 }}>
                  <Text style={[styles.todo, { flex: 1 }]}>{item.todo}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => pressHandler(item.key)}>
                  <Text style={styles.delete}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>

      <View style={{ flex: 2 }}>
        <View style={styles.bottom_container}>
          <TextInput
            onChangeText={(val) => setInput(val)}
            style={styles.textInput} />
          <KeyboardAvoidingView>
            <TouchableOpacity
              // onPress={() => {
              //   return (

              //   )
              // }}
              style={styles.todo_add_button}>
              <Text style={styles.button_text}>ADD TODO</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
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
    color: "black",
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
  todo: {
    // textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#CFD8DC",
    borderRadius: 5,
    margin: 10,
    padding: 10,
    color: "black",
    fontWeight: "bold",
  },
  delete: {
    // textAlign: "center",
    justifyContent: "center",
    backgroundColor: "red",
    borderRadius: 5,
    margin: 10,
    padding: 10,
    color: "white",
    fontWeight: "bold",
  },
  isDone: {
    justifyContent: "center",
    backgroundColor: "#CFD8DC",
    borderRadius: 5,
    margin: 10,
    padding: 5,
    color: "black",
    textDecorationLine: "line-through",
  },
});

export default App;
