import { useState } from "react";
import React from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, SafeAreaView} from 'react-native';


const LOGIN = gql`
    mutation loginUser($name: String!, $pass: String!) {
  login(name: $name, pass: $pass) {
    name,
    id
  }
}
  `
  function loginUser() {
    let input;
    const [loginUser, {data, error, loading}] = useMutation(LOGIN);
  }

const Login = () => {
    console.log("Error: ", error)
    console.log("data: ", data)
    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error login </Text>;
    const [modalVisible, setModalVisible] = useState(false);
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
                            />
                            </SafeAreaView>
                            <Text style={styles.modalText}>Accounst password:</Text>
                            <SafeAreaView>
                            <TextInput
                                style={styles.input}
                            />
                            </SafeAreaView>
                            <Pressable
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
        backgroundColor: '#2196F3',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
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