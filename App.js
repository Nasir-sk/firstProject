import React, { useEffect, useState }  from 'react';
import { View, Text , SectionList, Button } from 'react-native';
const App =()=>{
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.warn(count)
  },[count])
  return(
    <View>
     <Text style={{fontSize: 30}}>Life cycle with useEffect{count}</Text>
     <Button title='update count' onPress={()=>setCount(count+1)}/>
    </View>
  )
}

//componentDidMount for a specific component execute
export default App;