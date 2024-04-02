import React from 'react'
import { StyleSheet, Text, Image, Button, View } from 'react-native'

const Product=(props)=>{
    const item = props.item
    return(
        <View style={styles.cotainer}>
              <Text style={{fontSize:24}}>{item.name}</Text>
              <Text style={{fontSize:24}}>{item.price}</Text>
              <Text style={{fontSize:24}}>{item.color}</Text>
              <Image style={{width:200, height: 200, borderRadius:5,borderColor: "black", borderWidth:5, marginBottom:5 }} source={{uri:item.image}}/>
              <Button title='add to cart' />
              </View>
    )
}

const styles = StyleSheet.create({
    cotainer:{
        alignItems: "center",
        borderWidth:2,
        borderColor:"orange",
        margin:5,
        padding:5,
        borderRadius:5
    }
})

export default Product;