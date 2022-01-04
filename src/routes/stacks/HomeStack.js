import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '@/routes/tabs/MaterialTopTab';
import DetailsBand from '@/screens/DetailsBand';

const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => {
  return (
    <Navigator initialRouteName='Home' headerMode='none'>
      <Screen name='Home' component={Home} />
      <Screen name='DetailBand' component={DetailsBand} />
    </Navigator>
  );
};

export default HomeStack;
