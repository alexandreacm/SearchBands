import React from 'react';
import { useIsFocused } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Header from '@/components/Header';
import colors from '@/theme/colors';

import Home from '@/screens/Home';
import FavoriteBands from '@/screens/FavoriteBands';

const options = {
  activeTintColor: colors.SURFACE,
  inactiveTintColor: colors.DEFAULT_TEXT,
  indicatorStyle: {
    backgroundColor: colors.ACTION_SUCCESS
  },
  style: {
    height: 48,
    backgroundColor: colors.PRIMARY,
    borderBottomWidth: 1.0,
    borderBottomColor: colors.BORDER_BOTTOM_COLOR
  },
  labelStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
    lineHeight: 16,
    color: '#FFF'
  }
};

const MaterialTopTab = () => {
  const { isFocused } = useIsFocused();
  const { Navigator, Screen } = createMaterialTopTabNavigator();

  return (
    <>
      <Header
        title='My favorites bands'
        leftIcon
        backgroundColor={colors.PRIMARY}
        backButtonColor={colors.COLOR_WHITE}
        isFocused={isFocused}
      />
      <Navigator tabBarOptions={options}>
        <Screen name='Home' component={Home} />
        <Screen name='Favorites' component={FavoriteBands} />
      </Navigator>
    </>
  );
};

export default MaterialTopTab;
