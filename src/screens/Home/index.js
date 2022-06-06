import { View, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'


// Components
import Header from '../../components/Home/HeaderTab'
import SearchBar from '../../components/Home/SearchBar'
import Categories from '../../components/Home/Categories'
import RestaurantItem from '../../components/Home/RestaurantItem'
import BottomTabs from '../../components/Home/BottomsTabs'
import localRestaurants from '../../assets/data/localRestaurants'

const YELP_API_KEY = 'GcW6wGkRRBJQjECvBE1sO2LdY2MqpkLOSlQf2JvrQOoIPU_0cbRNzdjhwinwvu312YNg4HdYVrWBVw_pacQeNUW2pcSOwUnIdOQTdZX7ICLHKshui5axOSvpgZqXYnYx'

const Home = ({navigation}) => {
  const [activeTab, setActiveTab] = useState("Delivery")
  const [restaurantData, setRestaurantData] = useState(localRestaurants)
  const [city, setCity] = useState("Hollywood")


  const getRestaurantsFromYelp = async() => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      ).catch((e) => {});
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  },[city, activeTab])

  return (
    <View>
      <View style={{backgroundColor:'white',padding:12}}>
        <View style={{flexDirection:'row',alignSelf:'center'}}>
          <Header 
              text='Delivery' 
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          <Header 
            text='Pickup' 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            />
        </View>
        <SearchBar cityHandler={setCity}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:171}}>
        <Categories/>
        <RestaurantItem navigation={navigation} restaurantData={restaurantData}/>
      </ScrollView>
      <BottomTabs/>
    </View>

  )
}

export default Home