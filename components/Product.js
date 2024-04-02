import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, Image, Button, View } from 'react-native'

import {useDispatch, useSelector} from 'react-redux';
import { addToCart} from './redux/action';


const Product=(props)=>{
    const item = props.item;
    const dispatch = useDispatch();
    const cartItem = useSelector((state)=>state.reducer);
    const [isAdded, setIsAdded]=useState(false);

    const handleAddToCart=(item)=>{
        dispatch(addToCart(item))
    }

    useEffect(()=>{
        if(cartItem && cartItem.length){
            cartItem.forEach((element)=>{
                if(element.name === item.name){
                    setIsAdded(true)
                }
            })
        }
    },[cartItem])
    return(
        <View style={styles.cotainer}>
              <Text style={{fontSize:24}}>{item.name}</Text>
              <Text style={{fontSize:24}}>{item.price}</Text>
              <Text style={{fontSize:24}}>{item.color}</Text>
              <Image style={{width:200, height: 200, borderRadius:5,borderColor: "black", borderWidth:5, marginBottom:5 }} source={{uri:item.image}}/>
              {
                isAdded?
                <Button title='remove to cart' onPress={()=>handleAddToCart(item)}/>
                :
                <Button title='add to cart' onPress={()=>handleAddToCart(item)}/>
              }
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