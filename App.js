import React, {useState} from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button , } from 'react-native';
const App =()=>{
  const [show, setShow] = useState(false);
  const displayLoader=()=>{
    setShow(true);
    setTimeout(()=>{
      setShow(false)
    }, 3000);
  }
  return(
    <View style={styles.main}>
     {
      show ?
      <ActivityIndicator size={100} color={'green'} aminating={show} />: null
     }
     <Button title='show loader' onPress={displayLoader}/>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  }
})
export default App;