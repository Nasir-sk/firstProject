import {   View, Text, StyleSheet, Button, TextInput  } from 'react-native';

export const Home =(props)=>{
    return(
      <View style={styles.container}>
        <Text style={{fontSize:30}}>Home Screen</Text>
        <Button title='Go to Login page' onPress={()=> props.navigation.navigate("Login")}/>
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