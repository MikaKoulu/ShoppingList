import React from "react";
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from "react-native";

const Item = (props) => {

    return (
        <View style={style.item}>
            <View style={style.itemLeft}>
                <TouchableOpacity style={style.circle}>
                </TouchableOpacity>
                <Text style={style.itemText}>{props.text}</Text>
            </View>
        </View>

    )
}

const style = StyleSheet.create({
    item: { 
    backgroundColor:  "white",
    padding: 15,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
},
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap"
    },
    circle: {
        width: 30,
        height: 30,
        backgroundColor: "blue",
        opacity: 0.3,
        borderRadius: 20,
        marginRight: 15,
    },
    itemText: {},
});

export default Item;