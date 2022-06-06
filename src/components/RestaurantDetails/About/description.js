import { View, Text } from 'react-native'
import React from 'react'

const Description = (props) => {
  return (
    <View>
        <Text style={{
            marginTop:10,
            marginHorizontal:15,
            fontWeight:'700',
            fontSize:15.5,
            color:'black',
            marginVertical:20,
        }}>{props.description}</Text>
    </View>
  )
}

export default Description