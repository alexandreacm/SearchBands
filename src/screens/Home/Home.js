import React, { useState, useEffect } from 'react';
import { ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { StyledContainer as StyledMainContainer } from '@/helpers/commonStyles';
import { SliderImages } from '@/helpers/functions/utils';
import { BAND_KEY } from '@/helpers/constants/storageKeys';

import ListBands from './ListBands';
import Slider from '@/components/SliderMarketing';
import data from '../../mock/bands.json';

const Home = () => {
  const [bands] = useState(data.bands);

  const saveBands = async () => {
    try {
      if (data != null) {
        await AsyncStorage.removeItem(BAND_KEY);
        await AsyncStorage.setItem(BAND_KEY, JSON.stringify(data.bands));
      }
    } catch (err) {
      Alert.alert(err);
    }
  };

  useEffect(() => {
    saveBands();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Slider items={SliderImages} />
      <StyledMainContainer>
        <ListBands items={bands} />
      </StyledMainContainer>
    </ScrollView>
  );
};

export default Home;
