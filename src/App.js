import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Alert, Image } from "react-native";

import { Header, AddTodo, TodoItem } from "./components";

const App = () => {
  const [todos, setTodos] = useState([
    {
      key: 11,
      todo: "Happy new year 😎",
      isDone: false,
    },
    {
      key: 10,
      todo: "Happy coding 😎",
      isDone: false,
    },
    {
      key: 9,
      todo: "Show your completed and remain todos !",
      isDone: false,
    },
    {
      key: 8,
      todo:
        "When you finish your action, press todo item and it is change done!",
      isDone: false,
    },
    {
      key: 7,
      todo: "Todo-app ver 2.0 has new features!",
      isDone: false,
    },
    {
      key: 6,
      todo: "Several bugs fixed!",
      isDone: false,
    },
    {
      key: 5,
      todo: "Release Todo-app ver 2.0 !!!",
      isDone: false,
    },
    {
      key: 4,
      todo: "Be ready for other Project",
      isDone: false,
    },
    {
      key: 3,
      todo: "Wait for Code47",
      isDone: false,
    },
    {
      key: 2,
      todo: "Clap to Coderhackers",
      isDone: true,
    },
    {
      key: 1,
      todo: "Reply to Curious Coders",
      isDone: true,
    },
    {
      key: 0,
      todo: "Load The Project ver 0.95",
      isDone: true,
    },
  ]);

  const todo_num = todos.length;

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todos) => todos.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length < 3) {
      Alert.alert("Lighthouse-Team Todo App", "Please enter todo!!");
    } else {
      setTodos((prevTodos) => {
        return [
          {
            key: Math.random().toString(),
            todo: text,
            isDone: false,
          },
          ...prevTodos,
        ];
      });
    }
  };

  const pressCheck = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todos) =>
        todos.key == key ? { ...todos, isDone: !todos.isDone } : todos,
      );
    });
  };

  useEffect(() => {
    Alert.alert("Lighthouse-Team", "Welcome to 2021 !!!");
  }, []);

  return (
    <View style={styles.container}>
      <Header todoCounter={todo_num} />
      <AddTodo submitHandler={submitHandler} todosItem={todos} />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={todos}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>Nothing to do..</Text>
        )}
        renderItem={({ item }) => (
          <TodoItem
            todoItem={item}
            pressCheck={pressCheck}
            pressHandler={pressHandler}
          />
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
  emptyList: {
    color: "white",
    alignSelf: "center",
    margin: 20,
    fontSize: 20,
  },
});
