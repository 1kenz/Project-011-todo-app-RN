import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const AddTodo = ({ submitHandler, todosItem }) => {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  function keyPress(e) {
    if (e.keyCode == 13) {
      e.target.changeHandler;
    }
  }

  return (
    <View>
      <TextInput
        value={text}
        style={styles.input}
        keyboardType="default"
        placeholder="new todo..."
        placeholderTextColor="#777"
        onSubmitEditing={() => {
          submitHandler(text);
          setText("");
        }}
        onChangeText={changeHandler}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          submitHandler(text);
          setText("");
        }}>
        <Text style={styles.buttonText}>ADD TODO</Text>
      </TouchableOpacity>
      <View style={styles.status}>
        <Text style={styles.complete}>
          Completed: {todosItem.filter((todo) => todo.isDone).length}
        </Text>
        <Text style={styles.remain}>
          Remain: {todosItem.filter((todo) => !todo.isDone).length}
        </Text>
      </View>
    </View>
  );
};

export { AddTodo };

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 2,
    borderBottomColor: "#00a8ff",
    color: "#e2e2e2",
    textDecorationColor: "#e2e2e2",
  },
  button: {
    margin: 20,
    padding: 10,
    backgroundColor: "#ff3f34",
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    color: "#e2e2e2",
  },
  status: {
    flexDirection: "row",
    justifyContent: "space-between",
    // color: "#e2e2e2",
  },
  complete: {
    backgroundColor: "#27ae60",
    color: "#e2e2e2",
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginLeft: 20,
    marginBottom: 20,
  },
  remain: {
    backgroundColor: "#3498db",
    color: "#e2e2e2",
    fontWeight: "bold",
    marginRight: 20,
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginBottom: 20,
  },
});
