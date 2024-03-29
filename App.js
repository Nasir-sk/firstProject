import React, { useEffect, useState } from 'react';
import {   View, Text } from 'react-native';

const App =()=>{
  const [data, setData] = useState([]);
 const getAPIData = async ()=>{
  const url = "http://10.0.2.2:3000/users";
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
      data.map((item)=><View  style={{borderColor:"black", borderWidth:2}}>
     
      <Text style={{fontSize:20}}>{item.id}</Text>
      <Text style={{fontSize:20}}>{item.namw}</Text>
      <Text style={{fontSize:20}}>{item.Email}</Text>
      <Text style={{fontSize:20}}>{item.age}</Text>
    </View>
    )
       :null
    }
    </View>
    )
}

export default App;