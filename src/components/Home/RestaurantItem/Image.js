import { View, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const Image = (props) => {
  return (
    <View>
            <ImageBackground 
                source={{uri:props.image}}
                style={{
                    width:'100%',
                    height:180
                }}
            >
                <TouchableOpacity style={{position:'absolute',right:20, top:20}}>
                    <MaterialCommunityIcons name='heart-outline' size={25} color='#fff'/>
                </TouchableOpacity>
            </ImageBackground>
        </View>
  )
}

export default Image