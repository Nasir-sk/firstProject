import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Exstyles from './style'
const App =()=>{
  return(
    <View>
      <Text style={{color:'white', backgroundColor:'black', fontSize:15}}>Home</Text>
      <Text style={styles.textBox}>Style in React-Native</Text>
      <Text style={styles.textBox}>Style in React-Native</Text>
      <Text style={styles.textBox}>Style in React-Native</Text>
      <Text style={[styles.textBox, Exstyles.textBox]}>Style in React-Native</Text>
    
    </View>
  )
}

const styles = StyleSheet.create({
  textBox:{
    color:'#fff',
    fontSize:23,
    backgroundColor:'blue',
    marginBottom:10,
    padding:10,
    height: 100,
    textAlignVertical: 'center',
    textAlign:'center',
    borderColor:'cyan',
    borderWidth: 4,
    borderRadius: 10
  }
})
export default App;