import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        { name: "Friend #1", age: 20 },
        { name: "Friend #2", age: 25 },
        { name: "Friend #3", age: 35 },
        { name: "Friend #4", age: 34 },
        { name: "Friend #5", age: 24 },
        { name: "Friend #6", age: 22 },
        { name: "Friend #7", age: 28 },
        { name: "Friend #8", age: 56 },
        { name: "Friend #9", age: 45 },
    ];
    return <FlatList 
            showsHorizontalScrollIndicator = {false}
            showsVerticalScrollIndicator = {false}
            keyExtractor = {friend => friend.name}
            data = {friends}
            renderItem = {({ item }) => {
                return <Text style = {styles.textStyle}>
                    {item.name} - Age {item.age}
                    </Text>
            }}
            />;
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    },
});


export default ListScreen;