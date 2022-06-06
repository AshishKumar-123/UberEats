import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Info from './Info'
import Image from './Image'

import Feather from 'react-native-vector-icons/Feather'

const RestaurantItem = ({navigation, ...props}) => {

  return (
    <>
      {props.restaurantData.length > 0?
      <View>
          {props.restaurantData.map((restaurant, index) => (
            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('RestaurantDetail', {
              name:restaurant.name,
              image:restaurant.image_url,
              price:restaurant.price,
              rating:restaurant.rating,
              categories:restaurant.categories,
              reviews:restaurant.review_count

            })} key={index} style={{marginTop:10, padding:15, backgroundColor:'white'}}>

                <Image image={restaurant.image_url}/>
                <Info name={restaurant.name} rating={restaurant.rating}/>
                
            </TouchableOpacity>
          ))}
      </View>:
      <View style={{justifyContent:'center',alignItems:'center',height:'100%',marginTop:100}}>
        <Feather name='inbox' size={35} color='grey'/>
        <Text style={{color:'black'}}>No Results</Text>
      </View>
      }
    </>
  )
}

export default RestaurantItem