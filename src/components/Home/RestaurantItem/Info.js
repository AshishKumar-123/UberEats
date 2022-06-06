import { View, Text } from 'react-native'
import React from 'react'

const Info = (props) => {
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center',marginTop:10,}}>
        <View>
            <Text style={{fontSize:15, fontWeight:'bold', color:'black'}}>{props.name}</Text>
            <Text style={{color:'grey'}}>30-45 • min</Text>
        </View>
        <View style={{
            backgroundColor:'#eee',
            height:30,
            width:30,
            alignItems:'center',
            borderRadius:15,
            justifyContent:'center'
        }}>
            <Text style={{fontWeight:'700',color:'grey'}}>{props.rating}</Text>
        </View>
    </View>
  )
}

export default Info