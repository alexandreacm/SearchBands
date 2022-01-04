import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { BAND_KEY } from '@/helpers/constants/storageKeys';

import ListOffLineBands from './ListOffLineBands';

import { StyledContainer as StyledMainContainer } from '@/helpers/commonStyles';

const OffLineBands = () => {
  const [bands, setBands] = useState([]);

  const loadBandsOffLine = async () => {
    const listBands = await AsyncStorage.getItem(BAND_KEY);
    if (listBands != null) {
      setBands(JSON.parse(listBands));
    }
  };

  useEffect(() => {
    loadBandsOffLine();
  }, []);

  return (
    <>
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: '#FF1212',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ fontSize: 25, color: '#FFF', fontWeight: 'bold' }}>
          OffLine
        </Text>
      </View>
      <StyledMainContainer>
        <ListOffLineBands items={bands} />
      </StyledMainContainer>
    </>
  );
};

export default OffLineBands;
