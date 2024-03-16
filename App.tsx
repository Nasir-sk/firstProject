import React from "react";
import {
  Button,
  Text,
  View,
} from 'react-native';
import CompanyData from "./components/CompanyData";
let age = 3;
var email = "abc@test.com";

// function fruit(){
//   return "apple"
// }



const App = ()=>{
  const fruit = (val:any) =>{
    console.warn(val);
  }
  const name = "Naser"
  return(
    <View>
      <Text style={{fontSize:30}}>{name}</Text>
      {/* <Text style={{fontSize:30}}>{fruit()}</Text> */}
      <Text style={{fontSize:30}}>{email}</Text>
      <Button title="Press "></Button>
      {/* <Button title="on press" onPress={fruit} color={'skyblue'}/> */}
      <Button title="on press" onPress={()=>fruit("Hello Nasir")} color={'green'}/>
      <UserData/>
      <CompanyData/>
    </View>
  )
}

const UserData=()=>{
  return(
    <View>
      <Text style={{fontSize:30}}>Name : Naser</Text>
      <Text style={{fontSize:30}}> Age : 23</Text>
      <Text style={{fontSize:30}}>Email : naser@test.com</Text>
      <CompanyData/>
    </View>
  )
}

export default App;