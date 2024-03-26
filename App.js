import React from 'react';
import {   View, Text, StyleSheet, Button, TextInput  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './components/Login';
import { Home } from './components/Home';

const Stack = createNativeStackNavigator();
const App =()=>{
  const btnAction=()=>{
    console.warn("button pressed")
  }
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor:'blue',
          },
          headerTintColor:'orange',
          headerTitleStyle:{
            fontSize:25
          }
        }}
      >

        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}
        options={{
          headerTitle:()=><Button title='left'onPress={btnAction}/>,
          headerRight:()=><Header/>,
          headerStyle:{
            backgroundColor:'skyblue',
          },
          headerTintColor:'#000',
          headerTitleStyle:{
            fontSize:25
          }
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
}




const Header=()=>{
  return(
    <View>
      <TextInput>Enter name</TextInput>
    </View>
  )
}


export default App;