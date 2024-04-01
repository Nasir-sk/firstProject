import React, { useState } from 'react';
import {   View, Button, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
const App =()=>{
  const [user, setUser]=useState('')

  const setData= async()=>{
    await AsyncStorage.setItem("user","Naser SHaikh")
  }

  const getData= async ()=>{
    const name = await AsyncStorage.getItem("user")
    setUser(name)
  }
  const removeData = async()=>{
    await AsyncStorage.removeItem("user")
    setUser('')
  }
  return(
    <View style={{ marginTop:100,marginLeft:30}}>
      <Text style={{fontSize:20}}>AsyncStorage with React-Native | {user}</Text>
     <Button title='Set data' onPress={setData}/>
     <Button title='Get data' onPress={getData}/>
     <Button title='remove data' onPress={removeData}/>
    </View>
  )
}

export default App;