import { View, Text } from 'react-native'
import React from 'react'


import About from '../../components/RestaurantDetails/About'
import Menu from '../../components/RestaurantDetails/Menu'
import ViewCartButton from '../../components/RestaurantDetails/ViewCart'

const RestaurantDetails = ({route, navigation}) => {
  return (
    <View>
      <About route={route}/>
      <Menu restaurantName={route.params.name}/>
      <ViewCartButton navigation={navigation} restaurantName={route.params.name}/>
    </View>
  )
}

export default RestaurantDetails