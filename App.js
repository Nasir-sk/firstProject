import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet , } from 'react-native';
const App =()=>{
  const [selectedRadio, setSelectedRaddio] = useState(1);

  return(
    <View style={styles.main}>
      <TouchableOpacity onPress={()=>{setSelectedRaddio(1)}}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {
              selectedRadio === 1 ? <View style={styles.radioBg}></View>: null
            }
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{setSelectedRaddio(2)}}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {
              selectedRadio === 2 ? <View style={styles.radioBg}></View>: null
            }
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  radioText:{
    fontSize: 20,
    color: 'skyblue'
  },
  radio:{
    height: 40,
    width: 40,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 20,
     margin: 10
  },
  radioBg:{
    backgroundColor:'skyblue',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4
  },
  radioWrapper:{
    flexDirection: 'row',
    alignItems: 'center'
  }
})
export default App;