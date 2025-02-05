import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    return (<View>
        <Button title="Increase" 
        onPress={() => {
            setCounter(counter + 1);
        }} />
        <Button title="Decrease" 
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        onPress={() => {
            setCounter(counter - 1);
        }} />
        <Button title="Set 1000" 
        onPress={() => {
            setCounter(1000);
        }} />
        <Text style={styles.textStyle}>Current count: {counter}</Text>
    </View>);
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default CounterScreen;