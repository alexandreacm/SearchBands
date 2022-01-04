import React, { memo } from 'react';
import { ViewPropTypes } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import colors from '@/theme/colors';

import Label from '@/components/Label';

const CardBand = ({ name, onPress, style }) => {
  return (
    <StyledContainer style={style}>
      <StyledTouchable>
        <StyledContent>
          <StyledRow>
            <StyledContention>
              <StyledName numberOfLines={1} testID='Title'>
                {name}
              </StyledName>
            </StyledContention>
          </StyledRow>
        </StyledContent>
      </StyledTouchable>
      <StyledTouchableDetail onPress={onPress}>
        <Label color={colors.COLOR_WHITE}>Details of band</Label>
      </StyledTouchableDetail>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  border-radius: 8px;
  elevation: 10;
  box-shadow: 0px 1px 25px ${colors.CARD_BACKGROUND_SHADOW};
  background-color: ${colors.COLOR_WHITE};
`;

const StyledTouchable = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const StyledContent = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

const StyledRow = styled.View`
  flex-direction: row;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ aligItems }) => aligItems || 'center'};
  margin-top: ${({ marginTop }) => marginTop || 0}px;
  margin-bottom: ${({ marginBottom }) => marginBottom || 0}px;
`;

const StyledName = styled.Text`
  width: 170px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.PRIMARY};
`;

const StyledTouchableDetail = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  margin-top: 15px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.COLOR_BUTTON};
`;

const StyledContention = styled.View`
  width: 50%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

CardBand.defaultProps = {
  style: {},
  onPress: () => {}
};

CardBand.propTypes = {
  style: ViewPropTypes.style,
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func
};

export default memo(CardBand);
