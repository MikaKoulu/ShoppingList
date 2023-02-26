import Login from "./Login";
import Handling from "../gql/Handling";
import Register from "./Register";
import { View , StyleSheet, Text} from "react-native";
import { useState } from "react";

const State = () => {
    return(
        <View style={styles.row}>
            <Text style={styles.Title}>ShoppingList:</Text>
            <Text>        </Text>
    <Register/>
    <Login/>
    </View>
    )
}
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingBottom: 20,
    },
    Title: {
        fontSize: 24,
        fontWeight: "bold",
      },
})
export default State;