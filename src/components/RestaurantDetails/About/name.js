import { View, Text } from 'react-native'
import React from 'react'

const Name = (props) => {
  return (
    <View>
      <Text style={{
          fontSize:29,
          fontWeight:'bold',
          marginTop:10,
          marginHorizontal:15,
          color:'black',
          
      }}>{props.name}</Text>
    </View>
  )
}

export default Name