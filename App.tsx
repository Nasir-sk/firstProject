import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const App =()=>{
  let name = "Naser Shaikh";
  const [fname, setFname] = useState('Johny')

  return(
    <View>
      <Text style={{fontSize: 30}}>Props in React  js</Text>
      <User name={name} fname={fname} age={60}/>
      <Button title='update Props' onPress={()=>setFname('Depp')}/>
    </View>
  )
}

const  User =(props:any)=>{
  return(
    <View style={{backgroundColor:'black', padding:5}}>
      <Text style={{color:'white'}}>{props.name}</Text>
      <Text style={{color:'white'}}>{props.fname}</Text>
      <Text style={{color:'white'}}>{props.age}</Text>
      
    </View>
  )
}

export default App;