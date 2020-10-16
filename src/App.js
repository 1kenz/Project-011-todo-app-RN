import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Alert } from "react-native";
import TodoItem from "./components/Todos";
import Header from "./components/Header";
import AddTodo from "./components/addTodo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const todo_num = todos.length;

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todos) => todos.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length < 3) {
      Alert.alert("Lighthouse-Team Todo App", "Please enter todo!!")
    }
    else {
      setTodos((prevTodos) => {
        return [
          { key: todos.length, todo: text, isDone: false },
          ...prevTodos
        ];
      })
    }
  }

  useEffect(() => {
    Alert.alert("Lighthouse-Team", "Welcome to our todo app!")
  }, [])

  return (
    <View style={styles.container}>
      <Header item={todo_num} />
      <AddTodo submitHandler={submitHandler} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem item={item} pressHandler={pressHandler} />
        )}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e272e",
    flex: 1,
  },

  bottom_container: {
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#e2e2e2",
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
    backgroundColor: "#e2e2e2",
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
