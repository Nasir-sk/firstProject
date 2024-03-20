import React, { useEffect, useState }  from 'react';
import { View, Text , Button } from 'react-native';
const App =()=>{
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);

  useEffect(()=>{
    console.warn('do some animation')
  }, [count]);
  
  useEffect(()=>{
    console.warn('call some api here')
  }, [data]);
  

  return(
    <View>
     <Text>ComponentDidMount</Text>
     <Button title='update count' onPress={()=>setCount(count+1)}/>
     <Button title='update data' onPress={()=>setData(data+1)}/>
     <User info={{count, data}}/>
     
    </View>
  )
}

const User=(props)=>{
  console.warn(props.info);
  useEffect(()=>{
    console.warn("run this code when prop is updated");
  },[props.info.count, props.info.data])
  return(
    <View>
      <Text>User Component {props.info.count}</Text>
    </View>
  )
}
//componentDidMount for a specific component execute
export default App;