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

const Header = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={[styles.header, { flex: 1 }]}>TODO</Text>
      <Text style={[styles.todo_count]}>{props.num}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    fontWeight: "bold",
    color: "orange",
    margin: 5,
  },
  todo_count: {
    fontSize: 30,
    color: "orange",
    alignSelf: "center",
    margin: 10,
  },
});

export default Header;
