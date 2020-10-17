import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Alert, Image } from "react-native";
import { Header, AddTodo, TodoItem } from './components';

const App = () => {
  const [todos, setTodos] = useState([
    {
      key: 0,
      todo: "Load The Project",
      isDone: true,
    },
    {
      key: 1,
      todo: "Reply to Curious Coders",
      isDone: false,
    },
    {
      key: 2,
      todo: "Clap to Coderhackers",
      isDone: false,
    },
    {
      key: 3,
      todo: "Wait for Code47",
      isDone: false,
    },
    {
      key: 4,
      todo: "Be ready for other Project",
      isDone: false,
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
            key: todos.length,
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
    Alert.alert("Lighthouse-Team", "Welcome to our todo app ver 2.0!");
  }, []);

  return (
    <View style={styles.container}>
      <Header todoCounter={todo_num} />
      <AddTodo submitHandler={submitHandler} todosItem={todos} />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={todos}
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
});
