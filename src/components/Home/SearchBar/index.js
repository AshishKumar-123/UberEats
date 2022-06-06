import { View, TextInput, Text } from 'react-native'
import React from 'react'


// Icons
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'


const SearchBar = ({cityHandler}) => {
  return (
    <View style={{marginTop:16, flexDirection:'row'}}>
      <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#eee',borderRadius:50,width:'100%',justifyContent:'space-around'}}>
        <View style={{flexDirection:'row',alignItems:'center',marginLeft:10}}>
          <Ionicons name='location-sharp' color={'black'} size={24}/>
          <TextInput
            placeholder='Search'
            onChange={(e) => cityHandler(e.nativeEvent.text)}
            style={{fontWeight:'700',width:'69%'}}
          />
        </View>
        <View style={{flexDirection:'row', marginRight:8, backgroundColor:'white', borderRadius:30, padding:9,alignItems:'center'}}>
                <AntDesign name='clockcircle' color='black' size={11} style={{marginRight:6}}/>
                <Text style={{color:'grey'}}>Search</Text>
        </View>
      </View>
    </View>
  )
}

export default SearchBar