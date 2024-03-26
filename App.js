import React from 'react';
import {   View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const  Tab = createBottomTabNavigator();
const App =()=>{
 
  return(
    <NavigationContainer>
      <Tab.Navigator>

        <Tab.Screen name='Login' component={Login}/>
        <Tab.Screen name='SignUp' component={SignUp}/>
      </Tab.Navigator>
    </NavigationContainer>
    )
}


const SignUp=()=>{
  return(
    <View style={{flex:1, justifyContent:'center', alignItems:"center"}}>
      <Text style={{fontSize:30}}>SignUp</Text>
    </View>
  )
}


const Login=()=>{
  return(
    <View style={{flex:1, justifyContent:'center', alignItems:"center"}}>
      <Text style={{fontSize:30}}>Login</Text>
    </View>
  )
}


export default App;