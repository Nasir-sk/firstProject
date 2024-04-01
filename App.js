import React, {  useRef} from 'react';
import {   View, Button, StyleSheet, TextInput } from 'react-native';

const App =()=>{
  const input = useRef();

  const updateInput=()=>{
    console.warn("call");
    input.current.focus(); 
    input.current.setNativeProps({
      fontSize: 24,
      color: "red"
    })
  }
  return(
    <View style={styles.conatiner}>
     <TextInput ref={input} style={styles.input} placeholder='Enter name'/>
     <TextInput style={styles.input} placeholder='Enter password'/>
     <Button title='Update Input' onPress={updateInput}/>
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner:{
    flex:1,
    padding:16
  },
  input:{
    borderColor:'skyblue',
    borderWidth: 2,
    margin: 10,
    borderRadius:5,
  }
})
export default App;