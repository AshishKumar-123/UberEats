import { View, Text, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import styles from './styles'

const Header = (props) => {

  return (
    <View style={{borderRadius:20,paddingHorizontal:16,paddingVertical:6,backgroundColor:props.activeTab == props.text?'black':'white',overflow:'hidden'}}>
          <TouchableOpacity onPress={() => {props.setActiveTab(props.text)}}>
            <Text style={{color:props.activeTab == props.text?'white':'black', fontSize:15, fontWeight:'bold'}}>{props.text}</Text>
          </TouchableOpacity>
    </View>
  )
}

export default Header