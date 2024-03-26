import React, { useEffect, useState } from 'react';
import {   View, Text, FlatList } from 'react-native';

const App =()=>{
  const [data, setData] = useState([]);
 const getAPIData = async ()=>{
  const url = "https://jsonplaceholder.typicode.com/posts";
  let result = await fetch(url);
  result = await result.json();
  setData(result)
 }
 useEffect(()=>{
  getAPIData();
 })
  return(
    <View>
      <Text style={{fontSize:30,}}>FlatList API Call</Text>
    { data.length ? 
    <FlatList
      data={data}
      renderItem={({item})=>
      <View style={{padding:10, borderBottomColor:'#ccc', borderBottomWidth:1}}>
      <Text style={{fontSize:20, backgroundColor:'#ddd'}}>{item.id}</Text>
      {/* <Text style={{fontSize:20}}>{item.userId}</Text> */}
      <Text style={{fontSize:20}}>{item.title}</Text>
      <Text style={{fontSize:20}}>{item.body}</Text>
    </View>}
      />
      
      :null
    }
    </View>
    )
}

export default App;