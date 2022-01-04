import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OffLineBands from '@/screens/OffLineBands';

const { Navigator, Screen } = createStackNavigator();

const OffLineStack = () => {
  return (
    <Navigator initialRouteName='OffLineBands' headerMode='none'>
      <Screen name='OffLineBands' component={OffLineBands} />
    </Navigator>
  );
};

export default OffLineStack;
