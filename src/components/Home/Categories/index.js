import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const items = [
  {
    image:require('../../../assets/images/shopping-bag.png'),
    title:'Pick-up',
  },
  {
    image:require('../../../assets/images/bread.png'),
    title:'Bakery Items'
  },
  {
    image:require('../../../assets/images/fast-food.png'),
    title:'Fast Foods'
  },
  {
    image:require('../../../assets/images/deals.png'),
    title:'Deals'
  },
  {
    image:require('../../../assets/images/coffee.png'),
    title:"Coffee & Tea"
  },
  {
    image:require('../../../assets/images/desserts.png'),
    title:"Desserts"
  }
]

const Categories = () => {
  return (
    <View style={{marginTop:5,backgroundColor:'#fff',paddingVertical:10,paddingLeft:18}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <TouchableOpacity key={index} style={{alignItems:'center',marginRight:18}}>
            <Image source={item.image} style={{
              width:50,
              height:40,
              resizeMode:'contain'
              }}/>
              <Text style={{fontWeight:'bold',color:'black',fontSize:13}}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default Categories