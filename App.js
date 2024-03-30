import React, {  useState } from 'react';
import {   View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App =()=>{
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [age, setAge] = useState(0);

 const [nameErr, setNameErr] = useState(false);
 const [emailErr, setEmailErr] = useState(false);
 const [ageErr, setAgeErr] = useState(false);

 saveData = async () =>{

  if(!name){
    setNameErr(true);
  }else{
    setNameErr(false)
  }
  if(!email){
    setEmailErr(true);
  }else{
    setEmailErr(false)
  }
  if(!age){
    setAgeErr(true);
  }else{
    setAgeErr(false)
  }

  if(!name || !email || !age){
    return false;
  }
  const url = "http://10.0.2.2:3000/users";
  let result = await fetch(url,{
    method: "Post",
    body: JSON.stringify({name, email, age}),
    headers:{ "Content-Type":"application/json"}
  })
  result = await result.json();
  console.warn(result);
 }

  return(
    <View>
     <TextInput style={Styles.input} value={name} onChangeText={(text)=>setName(text)} placeholder='Enter Name'/>
     { nameErr ? <Text style={Styles.inputErr}>Please enter valid name</Text> : null}
     <TextInput style={Styles.input} value={email} onChangeText={(text)=>setEmail(text)} placeholder='Enter Email'/>
     { emailErr ? <Text style={Styles.inputErr}>Please enter valid email</Text> : null}
     <TextInput style={Styles.input} value={age} onChangeText={(text)=>setAge(text)} placeholder='Enter Age'/>
     { ageErr ? <Text style={Styles.inputErr}>Please enter valid age</Text> : null}
     <Button title='save data' onPress={saveData}/>
    </View>
    )
}

const Styles = StyleSheet.create({
  input:{
    borderColor:"blue",
    borderWidth:1,
    margin:4,
    borderRadius:4,
    textAlign: "justify"
  },
  inputErr:{
    margin: 3,
    color: "red",
    marginLeft: 6
  }
})

export default App;