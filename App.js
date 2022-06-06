
import React from 'react';

import {
  SafeAreaView,
  StatusBar
} from 'react-native';

// Screens
import RootNavigation from './Router/Navigation'


const App = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#eee'}}>
      <StatusBar backgroundColor={'#eee'} barStyle='dark-content'/>
      <RootNavigation/>
    </SafeAreaView>
  );
};



export default App;
