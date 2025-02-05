import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

//const HomeScreen = (props) => {
const HomeScreen = ({ navigation }) => {
  return <View>
    <Text style={styles.text}>
      Menue
    </Text>
    <Button
      onPress={() => navigation.navigate('Components')}
      title="Go to Components Demo"
    />
    <Button
      //onPress={() => props.navigation.navigate('List')}
      onPress={() => navigation.navigate('List')}
      title="Go to List Demo"
    />
    <Button
      //onPress={() => props.navigation.navigate('List')}
      onPress={() => navigation.navigate('Image')}
      title="Go to Image Demo"
    />
    <Button
      onPress={() => navigation.navigate('Counter')}
      title="Go to Counter Demo"
    />
    <Button
      onPress={() => navigation.navigate('Color')}
      title="Go to Color Demo"
    />
    <Button
      onPress={() => navigation.navigate('Square')}
      title="Go to Square Demo"
    />
    {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
      <Text style={styles.text}>
      Go to List Demo
      </Text> 
      <Text>
      Go to List Demo
      </Text> 
      </TouchableOpacity> */}
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

