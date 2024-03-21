import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
const App =()=>{
  return(
    <View style={styles.main}>
      <Pressable
        // onPress={()=>console.warn("normal")}
        // onPressIn={()=>console.warn("PressIn")}
        // onLongPress={()=>console.warn("LongPress")}
        onPressOut={()=>console.warn("Press Out")}
      >
        <Text style={styles.pressableButton}>Pressable</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  pressableButton:{
    backgroundColor:'blue',
    color:'#fff',
    padding:10,
    margin:10,
    borderRadius:10,
    fontSize:20,
    textAlign:'center',
    shadowColor:'#000',
    elevation:5
  }
})
export default App;