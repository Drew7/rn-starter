import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ImageDetail from "../components/ImageDetails";

const ImageScreen = ({ navigation }) => {
  return <View>
    <ImageDetail 
    title = "Forest" 
    imageSource = {require('../../assets/forest.jpg')}
    imageScore = {5} 
    />
    <ImageDetail 
    title = "Beach" 
    imageSource = {require('../../assets/beach.jpg')} 
    imageScore = {10}
    />
    <ImageDetail 
    title = "Mountain" 
    imageSource = {require('../../assets/mountain.jpg')} 
    imageScore = {8}
    />
    </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageScreen;

