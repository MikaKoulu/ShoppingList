import { StatusBar } from 'expo-status-bar';
import { AppRegistry, FlatList } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { useQuery, gql } from '@apollo/client';
import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Item from './components/Item';
import Register from './components/Register';
import Login from './components/Login';
import Handling from './gql/Handling';
import State from './components/State';


// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

export default function App() {
  //Functionality for creating/adding items to shopping list.
  const [item, setItem] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddItem = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, item])
    setItem(null);
  }

  const completeItem = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }


return (
  <ApolloProvider client={client}>
    <View style={styles.container}>
      <View style={styles.listWrapper}>
            {/*Login/register buttons and tittle in State*/}
       <State/>
        <ScrollView>
          <View style={styles.items}>
            {/* Items HERE */}
            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => completeItem(index)}>
                    <Item text={item} />
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </ScrollView>
      </View>

      {/*Write item*/}
      <KeyboardAvoidingView
        behaviour={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeItemWrapper}
      >
        <TextInput style={styles.input} placeholder={"Write new item"} value={item} onChangeText={text => setItem(text)} />

        <TouchableOpacity onPress={() => handleAddItem()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  </ApolloProvider>

);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61bef780',

  },
  row: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingBottom: 20,
  },
  listWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  Title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
  },
  writeItemWrapper: {
    position: 'absolute',
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 2,
  },
  addWrapper: {
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
