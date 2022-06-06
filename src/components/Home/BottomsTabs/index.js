import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import Icon from './icon'


const WINDOW_WIDTH = Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height


const BottomTabs = () => {
  return (
    <View style={{
        backgroundColor:'white',
        position:'absolute',
        width:WINDOW_WIDTH,
        top:WINDOW_HEIGHT-60,
        flexDirection:'row',
        justifyContent:'space-around',
        height:60,
        alignItems:'center'
    }}>
        <Icon icon='home' title='Home'/>
        <Icon icon='search' title='Browse'/>
        <Icon icon='shopping-bag' title='Grocery'/>
        <Icon icon='receipt' title='Orders'/>
        <Icon icon='user' title='Account'/>
    </View>
  )
}

export default BottomTabs