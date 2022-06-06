import { View, Text, Image } from 'react-native'
import React from 'react'

const FoodImage = (props) => {

  return (
    <View>
      <Image 
        source={{uri:props.food.image}}
        style={{
            width:100,
            height:100,
            borderRadius:8
        }}
      />
    </View>
  )
}

export default FoodImage