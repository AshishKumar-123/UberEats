import { View, Text } from 'react-native'
import React from 'react'

const FoodInfo = (props) => {
  return (
    <View style={{width:'55%', justifyContent:'space-evenly',}}>
      <Text style={{fontSize:19,fontWeight:'700',color:'black'}}>{props.food.title}</Text>
      <Text style={{color:'black'}}>{props.food.description}</Text>
      <Text style={{color:'black'}}>{props.food.price}</Text>
    </View>
  )
}

export default FoodInfo