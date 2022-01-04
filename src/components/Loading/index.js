import React, { memo } from 'react';
import { ActivityIndicator } from 'react-native';

import theme from '@/theme/colors';

import { StyledContainer } from './styles';

const Loading = () => (
  <StyledContainer>
    <ActivityIndicator size='large' color={theme.PRIMARY} />
  </StyledContainer>
);

export default memo(Loading);
