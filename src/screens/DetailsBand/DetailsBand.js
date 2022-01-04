import React, { useEffect, useState, useCallback } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';

import {
  useRoute,
  useIsFocused,
  useNavigation
} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { FAVORITE_KEY } from '@/helpers/constants/storageKeys';

import colors from '@/theme/colors';
import Header from '@/components/Header';

import CardDetailsBand from '@/components/CardDetailsBand';

import api from '@/services/api';

const DetailsBand = () => {
  const isFocused = useIsFocused();
  const { goBack } = useNavigation();
  const [errorMessage, setErrorMessage] = useState('');
  const [detailBand, setDetailBand] = useState({});
  const [listBands, setListBands] = useState(null);
  const [load, setLoad] = useState(false);

  const {
    params: { id }
  } = useRoute();

  const loadBandsStorage = async () => {
    const storageBands = await AsyncStorage.getItem(FAVORITE_KEY);
    const bands = JSON.parse(storageBands);
    if (bands != null) {
      setListBands(bands);
    }
  };

  const onHandleFavorite = async () => {
    try {
      const band = {
        id: detailBand?.id,
        name: detailBand?.name
      };

      if (listBands != null) {
        const findBand = listBands.find(item => item.id === band.id);

        if (findBand != null && findBand !== 'undefined') {
          listBands.splice(listBands.indexOf(findBand), 1);

          await AsyncStorage.setItem(FAVORITE_KEY, JSON.stringify(listBands));
          Alert.alert('Favorite removed!!');
        } else {
          await AsyncStorage.setItem(
            FAVORITE_KEY,
            JSON.stringify([...listBands, band])
          );
          Alert.alert('Favorite Added!!');
        }
      } else {
        await AsyncStorage.setItem(FAVORITE_KEY, JSON.stringify([band]));
        Alert.alert('Favorite Added!!');
      }
    } catch (err) {
      Alert.alert(err);
    }
  };

  const checkFavorite = () => {
    try {
      const favorite = listBands.filter(item => item.id === id);
      return favorite.length;
    } catch (error) {
      return false;
    }
  };

  const handleGoBack = () => goBack();

  const loadBands = useCallback(async () => {
    try {
      setLoad(true);
      const { data } = await api.get(`api/bands/${id}`);

      setDetailBand(data);
      setLoad(false);
    } catch (err) {
      setLoad(false);
      setErrorMessage(err);
    }
  }, [id]);

  useEffect(() => {
    loadBands();
    loadBandsStorage();
  }, [loadBands]);

  return (
    <>
      <Header
        title={detailBand?.name}
        showBackButton
        onBackPress={handleGoBack}
        backgroundColor={colors.PRIMARY}
        backButtonColor={colors.COLOR_WHITE}
        isFocuse={isFocused}
      />

      {errorMessage ? (
        <StyledViewLabel>
          <StyledLabel>{errorMessage}</StyledLabel>
        </StyledViewLabel>
      ) : (
        <StyledScrollView showsVerticalScrollIndicator={false}>
          <StyledContainerDefault>
            <CardDetailsBand
              name={detailBand?.name}
              image={detailBand?.image}
              genre={detailBand?.genre}
              biography={detailBand?.biography}
              numPlays={detailBand?.numPlays}
              onPressFavorite={() => onHandleFavorite()}
              favorite={checkFavorite()}
              isLoading={load}
            />
          </StyledContainerDefault>
        </StyledScrollView>
      )}
    </>
  );
};

const StyledContainerDefault = styled.View`
  flex: 1;
  background-color: ${colors.COLOR_WHITE};
  margin-left: 6px;
  margin-right: 6px;
  margin-top: 10px;
`;

const StyledLabel = styled.Text`
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 8px;
  color: ${colors.PRIMARY};
`;

const StyledViewLabel = styled.View`
  width: 100%;
  padding: 10px;
  align-items: center;
  background-color: ${colors.DANGER};
`;

const StyledScrollView = styled.ScrollView`
  flex: 1;
  background: ${colors.COLOR_WHITE};
`;
export default DetailsBand;
