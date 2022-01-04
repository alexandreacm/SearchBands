import React, { memo, useCallback } from 'react';
import styled from 'styled-components/native';

import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

import Lottie from 'lottie-react-native';

import colors from '@/theme/colors';
import spacings from '@/theme/spacings';

import Label from '@/components/Label';

import CardBand from '../../components/CardBand';
import noMovies from '../../assets/animations/empty-list.json';

const ListItem = ({ items, isLoading }) => {
  const { navigate } = useNavigation();

  const renderEmptyList = () => (
    <StyledEmptyListContainer>
      <StyledLottie source={noMovies} autoPlay loop />
      <Label
        textAlign='center'
        fontWeight={500}
        fontSize={18}
        marginTop={-spacings.EXTRA_LARGE}
      >
        Band not found
      </Label>
    </StyledEmptyListContainer>
  );

  const onHandleNavigate = useCallback(
    id => {
      navigate('DetailBand', { id });
    },
    [navigate]
  );

  const renderItem = ({ item: { id, name } }) => {
    if (isLoading) {
      return <StyledActivityIndicator size='large' color={colors.PRIMARY} />;
    }

    return <StyledCardBand name={name} onPress={() => onHandleNavigate(id)} />;
  };

  return (
    <StyledContainer>
      <StyledFlatList
        data={items}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
        ListEmptyComponent={renderEmptyList}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  background-color: ${colors.COLOR_GRAY};
  margin-top: 15px;
`;

const StyledActivityIndicator = styled.ActivityIndicator`
  height: 100px;
  margin-top: 32px;
  margin-bottom: 32px;
`;

const StyledFlatList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingVertical: spacings.EXTRA_SMALL
  }
})``;

const StyledCardBand = styled(CardBand)`
  padding: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const StyledEmptyListContainer = styled.View`
  width: 100%;
  height: 300px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const StyledLottie = styled(Lottie)`
  height: 250px;
  width: 250px;
  align-self: center;
  margin-top: -32px;
`;

ListItem.defaultProps = {
  items: [],
  isLoading: false
};

ListItem.propTypes = {
  isLoading: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    })
  )
};

export default memo(ListItem);
