import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({imageSource, title, imageScore}) => {
   
  return <View>
    <Image source={imageSource}/>
    <Text style={styles.text}>
      {title}
    </Text>
    <Text style={styles.text}>
      Image score - {imageScore}
    </Text>
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageDetail;

