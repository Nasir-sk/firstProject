import React from 'react';
import {   View, Text, StyleSheet, Button  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const App =()=>{
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

const Login =(props)=>{
  return(
    <View style={styles.container}>
      <Text style={{fontSize:30}}>Login Screen</Text>
      <Button title='Go to Home page' onPress={()=> props.navigation.navigate("Home")}/>
    </View>
  )
}
const Home =(props)=>{
  return(
    <View style={styles.container}>
      <Text style={{fontSize:30}}>Home Screen</Text>
      <Button title='Go to Login page' onPress={()=> props.navigation.navigate("Login")}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  }
})
export default App;