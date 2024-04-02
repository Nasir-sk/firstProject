import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {  useSelector } from 'react-redux'
const Header=()=>{
    const cartData = useSelector((state)=>state.reducer);
    const [cartItem, setCartItem] = useState(0)

    useEffect(()=>{
        setCartItem(cartData.length)
    }, [cartData])
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 30, textAlign:"right",padding:20, backgroundColor:"orange"}}>
                <View style={{backgroundColor:"yellow", borderRadius:15,height:40, width:40}}>
                    <Text style={{fontSize:30}}>{cartItem}</Text>
                </View>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default Header;