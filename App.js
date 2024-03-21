import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, Modal , } from 'react-native';
const App =()=>{
  const [showModal, setShowModal] = useState(false);
  return(
    <View style={styles.main}>
     <Modal
      transparent={true}
      visible={showModal}
      animationType='slide'
     >
     <View style={styles.centeredView}> 
     <View style={styles.modalView}>
      <Text style={styles.modalText}>
        Hello code step by step
      </Text>
      <Button title='clode modal' onPress={()=>setShowModal(false)}/>
     </View>
     </View>
     </Modal>
     <View style={styles.buttonView}>
      <Button title='Open Modal' onPress={()=> setShowModal(true)} />
     </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
  },
  buttonView:{
    flex: 1,
    justifyContent:'center'
  },
  centeredView:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  modalView:{
    backgroundColor:'#fff',
    padding:30,
    borderRadius:20,
    shadowColor:'black',
    elevation:5
  },
  modalText:{
    fontSize: 30,
    marginBottom: 20
  }
})
export default App;