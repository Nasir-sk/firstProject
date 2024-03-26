import {   View, Text, StyleSheet, Button, TextInput  } from 'react-native';
export const Login =(props)=>{
    return(
      <View style={styles.container}>
        <Text style={{fontSize:30}}>Login Screen</Text>
        <Button title='Go to Home page' onPress={()=> props.navigation.navigate("Home")}/>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: 'center',
      alignItems:'center'
    }
  })