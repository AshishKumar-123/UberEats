import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Icon = (props) => {
  return (
      <TouchableOpacity>
        <View style={{alignItems:'center'}}>
            <FontAwesome5
                name={props.icon}
                size={25}
                color='black'
            />
            <Text>{props.title}</Text>
        </View>
      </TouchableOpacity>
  )
}

export default Icon