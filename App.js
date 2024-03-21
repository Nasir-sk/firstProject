import React, { useState } from 'react';
import {   Platform, StyleSheet, View, Text  } from 'react-native';
const App =()=>{
 
  return(
    <View style={styles.container}>
     <Text style={{fontSize:30}}>Platform:{Platform.OS}</Text>
     {
      Platform.OS == 'android'?
      <View style={{backgroundColor:'green', height: 100, width:100}}></View>
      :
      <View style={{backgroundColor:'red', height: 100, width:100}}></View>
     }
     <Text style={styles.text}>Hello</Text>
     <Text>{JSON.stringify(Platform.constants.reactNativeVersion)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    color:Platform.OS=='android'?"orange":'blue',
    fontSize:20
  }
})
export default App;