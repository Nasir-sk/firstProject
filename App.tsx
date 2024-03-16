import React  from 'react';
import { View, Text , StyleSheet } from 'react-native';
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
     <Text style={{fontSize: 31}}>Grid with Dynamic Data</Text>
    <View style={{flex:1, flexDirection:'row', flexWrap:'wrap'}}>
      {
        users.map((item)=><Text style={styles.item}>{item.name}</Text>)
      }
     </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  item:{
    fontSize: 25,
    padding: 5,
    color: '#fff',
    // borderWidth: 1,
    backgroundColor:'blue',
    // borderColor: 'black',
    margin: 5,
    width: 120,
    height: 120,
    textAlignVertical:'center',
    textAlign: 'center'
  }
})
export default App;