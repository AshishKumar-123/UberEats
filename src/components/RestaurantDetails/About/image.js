import { View, Text, Image } from 'react-native'
import React from 'react'

const RestaurantImage = (props) => {
  return (
    <Image
        source={{uri:props.image}}
        style={{
            width:'100%',
            height:180
        }}
     />
  )
}

export default RestaurantImage