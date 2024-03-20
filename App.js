import React, {  useState }  from 'react';
import { View, Text , Button } from 'react-native';
const App =()=>{
  const [show, setShow] = useState(true);

  return(
    <View>
     <Text> Hide and Show component</Text>
     <Button title='Show' onPress={()=>setShow(!show)}/>
     {
      show ? <User/> : null
     }
    </View>
  )
}

const User=()=>{
  return(
    <View>
      <Text>User Component</Text>
    </View>
  )
}
//componentDidMount for a specific component execute
export default App;