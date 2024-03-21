import React, { useState } from 'react';
import {   StyleSheet, View, StatusBar, Button } from 'react-native';
const App =()=>{
  const [hide, setHide] = useState(false);
  const [barStyle, setBarStyle] = useState("default")
  return(
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'orange'}
        barStyle={barStyle}
        hidden={hide}
        />
         <View style={styles.button} ></View>
        <Button  title='Toggle status bar' onPress={()=>setHide(!hide)}/>
        <View style={styles.button} ></View>
        <Button title='Update style' onPress={()=>setBarStyle("dark-content")}/>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    justifyContent:'center'
  },
  button:{
    margin:10,
    padding:10
  }
})
export default App;