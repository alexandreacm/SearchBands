import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { FAVORITE_KEY } from '@/helpers/constants/storageKeys';

import ListFavoriteBands from './ListFavoriteBands';

import { StyledContainer as StyledMainContainer } from '@/helpers/commonStyles';

import { SliderImages } from '@/helpers/functions/utils';

import Slider from '@/components/SliderMarketing';

const FavoriteBands = () => {
  const [bands, setBands] = useState([]);

  const loadBandsStorage = async () => {
    const listBands = await AsyncStorage.getItem(FAVORITE_KEY);
    if (listBands != null) {
      setBands(JSON.parse(listBands));
    }
  };

  useEffect(() => {
    loadBandsStorage();
  }, []);

  return (
    <ScrollView>
      <Slider items={SliderImages} />
      <StyledMainContainer>
        <ListFavoriteBands items={bands} />
      </StyledMainContainer>
    </ScrollView>
  );
};

export default FavoriteBands;
