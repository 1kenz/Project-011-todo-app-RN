/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

const TodoItem = ({ todoItem, pressHandler, pressCheck }) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.todos,
          { backgroundColor: todoItem.isDone ? "#1e272e" : "#485460" },
        ]}
        onPress={() => {
          return pressCheck(todoItem.key);
        }}>
        <Text
          style={[
            styles.text,
            {
              textDecorationLine: todoItem.isDone ? "line-through" : null,
              fontWeight: todoItem.isDone ? "normal" : "bold",
              color: todoItem.isDone ? "#bbb" : "#e2e2e2",
            },
          ]}>
          {todoItem.todo}{" "}
        </Text>
        <TouchableOpacity onPress={() => pressHandler(todoItem.key)}>
          <View>
            <Image
              style={styles.image}
              source={require("../img/del-circle.png")}
            />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export { TodoItem };

const styles = StyleSheet.create({
  todos: {
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#485460",
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    padding: 5,
    paddingLeft: 10,
    flexDirection: "row",
  },
  text: {
    flex: 1,
    color: "#e2e2e2",
    fontWeight: "bold",
    alignSelf: "center",
  },
  image: {
    width: 25,
    height: 25,
    margin: 5,
  },
});
