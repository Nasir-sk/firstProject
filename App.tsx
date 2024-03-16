import React  from 'react';
import { View, Text , StyleSheet, FlatList } from 'react-native';
import style from './style';
const App =()=>{
  const users =[ 
    {
       id: 1,
       name: "Naser",
       email: 'nasir@gmail.com'
    },
    {
       id: 2,
       name: "Shaikh",
       email: 'nasir@gmail.com'
    },{
       id: 3,
       name: "Johny",
       email: 'nasir@gmail.com'
   },{
     id: 4,
     name: "Depp",
     email: 'nasir@gmail.com'
   },{
     id: 5,
     name: "Kristen",
     email: 'nasir@gmail.com'
   },{
     id: 6,
     name: "Stewert",
     email: 'nasir@gmail.com'
   },{
     id: 7,
     name: "Prerna",
     email: 'nasir@gmail.com'
   },{
     id: 8,
     name: "Salvi",
     email: 'nasir@gmail.com'
   },
   ]
  return(
    <View>
     <Text style={{fontSize: 31}}>Component in loop with FlatList</Text>
      <FlatList 
        data = {users}
        renderItem={({item})=><UserData item={item}/>}/>
    </View>
    
  )
}

const UserData=(props: any)=>{
  const item = props.item;
  return(
    <View style={styles.box}>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.email}</Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  item:{
    fontSize: 24,
    flex: 1,
    // padding: 5,
    color: 'orange',
    // borderWidth: 1,
    backgroundColor:'blue',
    // borderColor: 'black',
    margin: 2,
    // width: 120,
    // height: 120,
    // textAlignVertical:'center',
    textAlign: 'center'
  },
  box:{
    flexDirection:'row',
    borderWidth:2,
    borderColor:'orange',
    marginBottom: 10
  }
})
export default App;