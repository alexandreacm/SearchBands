import React, { memo } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import colors from '@/theme/colors';
import StatusBarColor from '@/config/StatusBarColor';
import Label from '@/components/Label';

import imgLogo from '@/assets/icons/logo.png';

const Header = ({
  title,
  showBackButton,
  onBackPress,
  backgroundColor,
  backButtonColor,
  isFocused
}) => {
  return (
    <>
      <StyledSafeArea backgroundColor={backgroundColor} />
      {isFocused && (
        <StatusBarColor backgroundColor={backgroundColor} isPrimaryColorDark />
      )}
      <StyledContainer backgroundColor={backgroundColor}>
        {showBackButton ? (
          <TouchableOpacity onPress={onBackPress}>
            <Icon name='arrow-back' size={26} color={backButtonColor} />
          </TouchableOpacity>
        ) : (
          <View>
            <Image source={imgLogo} width={32} height={32} />
          </View>
        )}

        <StyledContainerTitle>
          <Label color={colors.COLOR_WHITE}>{title}</Label>
        </StyledContainerTitle>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.View`
  width: 100%;
  height: 55px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 10px;
`;

const StyledSafeArea = styled.SafeAreaView`
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const StyledContainerTitle = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

Header.defaultProps = {
  title: '',
  onBackPress: () => {},
  showBackButton: false,
  backgroundColor: colors.PRIMARY,
  backButtonColor: colors.COLOR_WHITE,
  isFocused: true
};

Header.propTypes = {
  title: PropTypes.string,
  onBackPress: PropTypes.func,
  showBackButton: PropTypes.bool,
  backgroundColor: PropTypes.string,
  backButtonColor: PropTypes.string,
  isFocused: PropTypes.bool
};

export default memo(Header);
