import { View, Text } from 'react-native'
import React from 'react'

import RestaurantImage from './image'
import Description from './description'
import Name from './name'

const yelpRestaurantInfo =  {
  name:"Farmhouse Kitchen Thai Cuisine",
  image:"https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80",
  price:"$$",
  rating:4,
  categories:[{title:'Thai'}, {title:"Comfort Food"}],
  reviews:1355
}


const About = (props) => {

  const {name, image, price, rating, categories, reviews} = props.route.params

  const formattedCategories = categories.map((cat) => cat.title).join(" • ")

  const description = `${formattedCategories} ${price ? " • " + price : ""} • 🎫 • ${rating} ⭐ (${reviews}+)`

  return (
    <View style={{borderBottomColor:'black',borderBottomWidth:0.9}}>
      <RestaurantImage image={image}/>
      <Name name={name}/>
      <Description description={description}/>
    </View>
  )
}

export default About