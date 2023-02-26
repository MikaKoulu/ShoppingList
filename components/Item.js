import React from "react";
import { View, Text, StyleSheet, Touchable, TouchableOpacity, Keyboard, TextInput, SafeAreaView } from "react-native";


const Item = (props) => {
    //Creates item for shopping list
    return (
        <View style={style.item}>
            <View style={style.itemLeft}>
                <Text style={style.itemText}>{props.text}</Text>
            </View>
            <View style={style.itemRight}>
            <Text> € </Text>
                <View style={style.input}>
                <SafeAreaView>
                    <TextInput style={style.TextArea} keyboardType="numeric"
                        placeholder="price">
                    </TextInput>
                </SafeAreaView>
                </View>
                <View style={style.input}>
                <SafeAreaView>
                    <TextInput style={style.TextArea} keyboardType="numeric"
                        placeholder="amount">
                    </TextInput>
                </SafeAreaView>
                </View>
                <Text> x: </Text>
            </View>
        </View>

    )
}

const style = StyleSheet.create({
    item: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: "row-reverse",
        alignItems: "center",
        flexWrap: "wrap",
    },
    TextArea: {

    },
    itemText: {
    },
    itemRight: {
        flexDirection: "row-reverse",
        alignItems: "center",
        flexWrap: "wrap-reverse",
        justifyContent:"space-around",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 20,

    }, addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: "white",
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: "center",
        borderColor: "black",
        borderWidth: 2,
    },
    addText: {},
    input: {
        borderRadius: 20,
        margin: 4,
        padding: 2,
        backgroundColor: "#8cffe9",
        fontStyle: "italic",
        fontSize: 2,
    },
});

export default Item;