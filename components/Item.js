import React from "react";
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from "react-native";

const Item = (props) => {

    return (
        <View style={style.item}>
            <View style={style.itemLeft}>
                <Text style={style.itemText}>{props.text}</Text>
            </View>
            <View style={style.itemRight}>
                <TouchableOpacity style={style.circle}>
                <View style={style.addWrapper}>
              <Text style={style.addText}>Leipää</Text>
            </View>
                </TouchableOpacity>
                <TouchableOpacity style={style.circle}>
                </TouchableOpacity>
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
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap"
    },
    circle: {
        width: 60,
        height: 40,
        backgroundColor: "grey",
        opacity: 0.4,
        borderRadius: 20,
        alignItems: "flex-end",
        padding: 20,
        marginLeft: 20,
    },
    itemText: {
    },
    itemRight: {
        flexDirection: "row-reverse",
        alignItems: "center",
        flexWrap: "wrap"
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
});

export default Item;