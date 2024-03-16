import React  from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView,  } from 'react-native';
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
},{
  id: 4,
  name: "Depp"
},{
  id: 5,
  name: "Kristen"
},{
  id: 6,
  name: "Stewert"
},{
  id: 7,
  name: "Prerna"
},{
  id: 8,
  name: "Salvi"
},
]
  return(
    <View>
      <Text style={{fontSize: 31}}>List with Flatlist</Text>
      <ScrollView style={{marginBottom: 40}}>
      <FlatList
        data={users}
        renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item=>item.id}
        />
        {
          users.map((item)=>
          <Text style={styles.item}>{item.name}</Text>
          )
        }
        </ScrollView>
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