import React  from 'react';
import { View, Text , SectionList } from 'react-native';
const App =()=>{
  
  const users=[
    {
      id: 1,
      name: "Naser",
      data:["php", "React js", "Angular"]
    },
    {
      id: 2,
      name: "Peter",
      data:["Java", "JS", "HTML"]
    },{
      id: 3,
      name:"Tony",
      data:["CSS","BootsTrap", "Python"]
    },{
      id: 4,
      name:"Tony",
      data:["CSS", "Bootstrap", "HTML"]
    }
  ]
  return(
    <View>
     <Text style={{fontSize: 31}}>SectionList to display nestedd array</Text>
     <SectionList 
     sections={users}
     renderItem={({item})=><Text style={{fontSize: 20, marginLeft: 20}}>{item}</Text>}
     renderSectionHeader={({section:{name}})=>(
      <Text style={{fontSize: 25, color:'red'}}>{name}</Text>
  )}
     />
    </View>
  )
}
export default App;