import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.text}>Hi there! I can do everything on react native :)</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

