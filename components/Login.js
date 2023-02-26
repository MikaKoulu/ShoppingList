import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import React from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, SafeAreaView, Keyboard } from 'react-native';
import { Picker } from "@react-native-picker/picker";



//Query for login
const LOGIN = gql`
    mutation loginUser($name: String!, $pass: String!) {
  login(name: $name, pass: $pass) {
    name,
    id
  }
}
`


const Login = () => {
    //UseStates for setting login active and sending mutation
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState();
    const [pass, setPass] = useState();
    const [login, setLogin] = useState(false);
    const { data, error, loading } = useMutation(LOGIN);
    console.log(login)
    const HandleLogin = () => {
        Keyboard.dismiss();
        setName(name)
        setPass(pass)
        setLogin(true);
        console.log(login)
    }
    const SignOutHandle = () => {
        setLogin(false);
        console.log(Login)
    }
    //loading or error loading depending on if it works or not.
    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error Logging </Text>;
    //IF LOGIN TRUE EXECUTE THIS LINE WHERE THE BUTTON WILL LOG-OUT
    if (login == true) 
    return (
        <View style={styles.centeredView}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>LoginSuccess:</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Close</Text>
                    </Pressable>

                </View>
            </View>
        </Modal>
                {/*Buttons execute logout*/}
        <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
            onPressIn={() => SignOutHandle()}>
            <Text style={styles.textStyle}>LogOut</Text>
        </Pressable>
    </View>)
    //if not logged in this model opens login window.
return (
    <View style={styles.centeredView}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Account name:</Text>
                    <SafeAreaView>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Account name"
                            onChangeText={text => setName(text)}
                        />
                    </SafeAreaView>
                    <Text style={styles.modalText}>Accounst password:</Text>
                    <SafeAreaView>
                        <TextInput
                            secureTextEntry={true}
                            style={styles.input}
                            placeholder="Enter password"
                            onChangeText={text => setPass(text)}
                        />
                    </SafeAreaView>
                            {/*Buttons to login or cancel request*/}
                    <Pressable
                        onPress={() => HandleLogin()}
                        style={[styles.button, styles.buttonClose]}>
                        <Text style={styles.textStyle}>Login</Text>

                    </Pressable>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Cancel</Text>
                    </Pressable>

                </View>
            </View>
        </Modal>
        {/*Buttons to open modal*/}
        <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Login</Text>
        </Pressable>
    </View>
);
        };
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 10,
        paddingHorizontal: 50,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 5,
    },
    buttonOpen: {
        backgroundColor: '#abdbe3',
    },
    buttonClose: {
        backgroundColor: '#abdbe3',
    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 4,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderRadius: 10,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: "black",
    },
});

export default Login;