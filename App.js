import React from 'react'
import { StyleSheet, Text, View,  ScrollView } from 'react-native'
import Header from './components/Header'
import Product from './components/Product'

const App=()=>{
  const products =[
    {
      name:"Samsung",
      color:"white",
      price:30000,
      image:"https://m.media-amazon.com/images/I/71+0MKV37HL._AC_UF1000,1000_QL80_.jpg"
    },{
      name:"Apple I phone",
      color:"black",
      price:130000,
      image:"https://m.media-amazon.com/images/I/71+0MKV37HL._AC_UF1000,1000_QL80_.jpg"
    },{
      name:"RealMe",
      color:"blue",
      price:11000,
      image:"https://m.media-amazon.com/images/I/71+0MKV37HL._AC_UF1000,1000_QL80_.jpg"
    },
  ]
    return(
        <View style={styles.container}>
           <Header/>
           <ScrollView>
           {
            products.map((item)=><Product item={item}/>)
           }
           </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})

export default App;