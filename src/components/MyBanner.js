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

const MyBanner = (props) => {
  return (
    <View>
      <Text style={styles.todo}>{props.todo}</Text>
      {/* <Text style={styles.text}>{props.isDone}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    // textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#CFD8DC",
    borderRadius: 5,
    margin: 10,
    padding: 5,
    color: "black"
  },
});

export default MyBanner;
