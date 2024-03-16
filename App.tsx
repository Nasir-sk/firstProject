import React  from 'react';
import { View, Text, StyleSheet, FlatList,  } from 'react-native';
const App =()=>{
 const users =[ 
 {
    id: 1,
    name: "Naser"
 },
 {
    id: 2,
    name: "Shaikh"
 },{
    id: 3,
    name: "Johny"
},
]
  return(
    <View>
      <Text style={{fontSize: 31}}>List with Flatlist</Text>
      <FlatList
        data={users}
        renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item=>item.id}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  item:{
    fontSize: 20,
    padding: 10,
    color: '#fff',
    borderWidth: 1,
    backgroundColor:'blue',
    borderColor: 'black',
    margin: 10
  }
})
export default App;