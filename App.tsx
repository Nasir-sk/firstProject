import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,  } from 'react-native';
const App =()=>{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);
  
  const resetForm=()=>{
    setDisplay(false);
    setEmail('');
    setPassword('');
    setName('');
  }
  return(
    <View>
      <Text style={{fontSize: 30}}>Simple form in React Native</Text>
        <TextInput 
          style={styles.textInput}
          placeholder='Enter user name'
          value={name}
          onChangeText={(text)=>setName(text)}
        />
        <TextInput 
          style={styles.textInput}
          placeholder='Enter user email'
          value={email}
          onChangeText={(text)=>setEmail(text)}
        />
        <TextInput 
          style={styles.textInput}
          placeholder='Enter user password'
          value={password}
          onChangeText={(text)=>setPassword(text)}
        />
        <View style={{marginBottom: 10}}>
        <Button 
          title='Print details' 
          color={'green'} 
          onPress={()=>setDisplay(true)}
        />
        </View>
        <Button title='clear datails' onPress={resetForm}/>
        <View>
          { 
            display ?
            <View>
              <Text style={{fontSize: 30}}>User name is : {name}</Text>
              <Text style={{fontSize: 30}}>User email is : {email}</Text>
              <Text style={{fontSize: 30}}>User password is : {password}</Text>
            </View>
            : null
          }
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textInput:{
    fontSize: 18,
    color: 'blue',
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10


  }
})
export default App;