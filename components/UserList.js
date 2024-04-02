import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {getUserList} from './redux/action';
import { useDispatch, useSelector } from 'react-redux';

export default function UserList() {
  const dispatch = useDispatch();
  const userList = useSelector((state)=>state.reducer)
  useEffect(()=>{
    dispatch(getUserList());
  },[])
  
  console.warn("in component", userList);
  return (
    <View style={styles.container}>
        {
          userList.length?
          userList.map((item)=>(
            <Text style={{fontSize:18}}>{item.firsName}</Text>
          ))
          :null
        }
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
