/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import React from "react";
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

const App = () => {
  var todos = ["a", "b"];
  var todo_num = todos.length;
  const onPress = null;

  return (
    <SafeAreaView style={[styles.container, { flex: 1 }]}>
      <View style={{ flexDirection: "row" }}>
        <Text style={[styles.todo, { flex: 1 }]}>TODO</Text>
        <Text style={[styles.text]}>{todo_num}</Text>
      </View>
      <View style={{ flex: 7 }}>
        <Text>TODO</Text>
      </View>

      <View style={{ flex: 2 }}>
        <View
          style={{
            textAlign: "center",
            justifyContent: "center",
            backgroundColor: "#CFD8DC",
            borderRadius: 15,
            margin: 10,
          }}>
          <TextInput
            style={{
              margin: 20,
              padding: 10,
              borderRadius: 10,
              backgroundColor: "white",
            }}
          />
          <TouchableOpacity
            onPress={onPress}
            style={{
              marginBottom: 10,
              padding: 5,
              width: 200,
              height: 40,
              borderRadius: 5,
              backgroundColor: "#37474F",
              fontSize: 15,
              fontWeight: "bold",
              alignSelf: "center",
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
                textAlignVertical: "center",
              }}>
              ADD TODO
            </Text>
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
  todo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "orange",
    margin: 5,
    // backgroundColor:"red"
  },
  text: {
    fontSize: 30,
    color: "orange",
    alignSelf: "center",
    margin: 10,
    // backgroundColor:"yellow"
  },
});

export default App;
