import React, { memo } from 'react';
import { ViewPropTypes, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '@/theme/colors';

const CardDetailsBand = ({
  onPressFavorite,
  name,
  image,
  genre,
  biography,
  numPlays,
  style,
  favorite,
  isLoading
}) => {
  return (
    <StyledContainer style={style}>
      {isLoading ? (
        <ActivityIndicator size={40} color={colors.PRIMARY} />
      ) : (
        <>
          <StyledContainerBand>
            <StyledImage source={{ uri: image }} resizeMode='contain' />
            <StyledContent>
              <StyledName>Band Name:{name}</StyledName>
              <StyledText>Genre: {genre}</StyledText>
              <StyledTextActors>Number plays: {numPlays}</StyledTextActors>
              <StyledTouchableStar onPress={onPressFavorite}>
                <Icon
                  name={favorite ? 'star' : 'star-border'}
                  size={40}
                  color={colors.PRIMARY}
                />
              </StyledTouchableStar>
            </StyledContent>
          </StyledContainerBand>
          <StyledBiography>
            <StyledBiographyText>Biography</StyledBiographyText>
          </StyledBiography>
          <StyledDescription>{biography}</StyledDescription>
        </>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  padding: 5px;
  border-radius: 8px;
  margin-bottom: 10px;
  elevation: 10;
  box-shadow: 0px 1px 25px ${colors.CARD_BACKGROUND_SHADOW};
  background-color: ${colors.COLOR_WHITE};
`;

const StyledContainerBand = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;
`;

const StyledContent = styled.View`
  flex: 1;
  justify-content: flex-start;
  background-color: ${colors.COLOR_WHITE};
`;

const StyledName = styled.Text`
  font-size: 16px;
  text-align: left;
  font-weight: bold;
  margin-bottom: 6px;
`;

const StyledBiography = styled.View`
  width: 100%;
  background-color: ${colors.PRIMARY};
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 8px;
`;

const StyledBiographyText = styled.Text`
  font-size: 16px;
  text-align: left;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: ${colors.COLOR_WHITE};
`;

const StyledDescription = styled.Text`
  font-size: 16px;
  text-align: left;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
`;

const StyledText = styled.Text`
  font-size: 14px;
  text-align: left;
  font-style: normal;
  font-weight: normal;
  color: ${colors.DEFAULT_TEXT};
`;

const StyledImage = styled.Image`
  width: 120px;
  height: 120px;
  margin-right: 10px;
  border-radius: 10px;
`;

const StyledTextActors = styled.Text`
  font-size: 14px;
  text-align: left;
  font-style: normal;
  font-weight: normal;
  color: ${colors.DEFAULT_TEXT};
  margin-top: 10px;
`;

const StyledTouchableStar = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: flex-start;
`;

CardDetailsBand.defaultProps = {
  image: undefined,
  style: {},
  numPlays: 0,
  onPressFavorite: () => {},
  favorite: undefined,
  isLoading: false,
  name: undefined,
  genre: undefined,
  biography: undefined
};

CardDetailsBand.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  genre: PropTypes.string,
  biography: PropTypes.string,
  numPlays: PropTypes.number,
  onPressFavorite: PropTypes.func,
  style: ViewPropTypes.style,
  favorite: PropTypes.bool,
  isLoading: PropTypes.bool
};

export default memo(CardDetailsBand);
