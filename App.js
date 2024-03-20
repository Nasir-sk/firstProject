import React, { useEffect, useState }  from 'react';
import { View, Text , Button } from 'react-native';
const App =()=>{
  const [show, setShow] = useState(true);

  return(
    <View>
     <Text>useEffect for unMount Component</Text>
     <Button title='Hide and Show' onPress={()=>setShow(!show)}/>
    {
      show ?
      <User/>: null
     }
     
    </View>
  )
}

const User=(props)=>{
  const timer = setInterval(()=>{
    console.warn("Timer called");
  }, 2000)

  useEffect(()=>{
    return ()=> clearInterval(timer)
  })
  return(
    <View>
      <Text>User Component</Text>
    </View>
  )
}
//componentDidMount for a specific component execute
export default App;