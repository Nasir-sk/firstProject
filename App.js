import React, {  useEffect, useState } from 'react';
import {   View, Text,  Button, StyleSheet, Modal } from 'react-native';

const App =()=>{
 const [data, setData]=useState([])
 const [showModal, setShowModal] = useState(false);
 const [selectedUser, setSelectedUser]= useState(undefined)
 const getAPIData = async ()=>{
  const url = "http://10.0.2.2:3000/users";
  let result = await fetch(url);
  result = await result.json();
  if(result){
    setData(result)
  }
 }

 const deleteAPI = async (id)=>{
  const url = "http://10.0.2.2:3000/users";
  let result = await fetch(`${url}/${id}`,{
    method:"delete"
  })
  result = await result.json();
  if(result){
    console.warn("User Deleted");
    getAPIData();
  }
 }
useEffect(()=>{
  getAPIData();
},[])

const  updateUser =(data)=>{
  setShowModal(true);
  setSelectedUser(data)
}
  return(
    <View style={styles.container}>
      <View style={styles.dataWrapper}> 
      <View style={{flex: 1}}>
        <Text>Name</Text>
        </View>
        <View style={{flex: 2}}>
        <Text>Age</Text>
        </View>
        <View style={{flex: 1}}>
        <Text>Operation</Text>
        </View>
        </View>
        {
          data.length?
          data.map((item)=><View style={styles.dataWrapper}>
            <View style={{flex: 1}}>
              <Text>{item.name}</Text>
            </View>
            <View style={{flex: 1}}>
              <Text>{item.age}</Text>
            </View>
            <View style={{flex: 1}}>
              <Button title='delete' onPress={()=>deleteAPI(item.id)}/>
            </View>
            <View style={{flex: 1}}>
              <Button title='update' onPress={()=>updateUser(item)}/>
            </View>
            
          </View>)
          :null
        }
        <Modal visible={showModal} transparent={true}>
         <UserModal setShowModal={setShowModal} selectedUser={selectedUser}/>
        </Modal>
    
    </View>
    )
}

const UserModal =(props)=>{
  console.warn(props.selectedUser);
  return(
    <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <Text>{props.selectedUser.name}</Text>
      <Button title='Close' onPress={()=>props.setShowModal(false)}/>
    </View>
  </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  dataWrapper:{
    flexDirection:"row",
    justifyContent:"space-around",
    backgroundColor:"orange",
    margin:5,
    padding: 8
  },
  centeredView:{
    flex:1,
    justifyContent:'center',
    alignItems:"center"
  },
  modalView:{
    backgroundColor:"#fff",
    padding: 40,
    borderRadius:10,
    shadowColor:"#000",
    shadowOpacity:0.70,
    elevation:5
  }
})

export default App;