import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as ReduxProvider } from 'react-redux';


import Home from '../src/screens/Home'
import RestaurantDetails from '../src/screens/RestaurantDetails'
import configureSotre from '../redux/store';

const Stack = createStackNavigator()

const store = configureSotre()

const screenOptions = {
    headerShown:false
}

const RootNavigation = () => {
  return (
      <ReduxProvider store={store}>
        <NavigationContainer>
                <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
                    <Stack.Screen name='Home' component={Home}/>
                    <Stack.Screen name='RestaurantDetail' component={RestaurantDetails}/>
                </Stack.Navigator>
        </NavigationContainer>
      </ReduxProvider>
  )
}

export default RootNavigation