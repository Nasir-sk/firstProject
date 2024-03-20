import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
const App =()=>{
  return(
    <View style={styles.main}>
      <TouchableOpacity>
        <Text style={styles.button}>Button</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  button:{
    backgroundColor:'#bbb',
    color: '#fff',
    fontSize:24,
    textAlign: 'center',
    padding: 10,
    margin: 10,
    shadowColor: 'red',
    elevation: 10,
    borderRadius: 10,
    shadowOpacity: 1
  }
})
export default App;