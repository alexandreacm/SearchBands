import React from 'react';
import styled from 'styled-components/native';

import Routes from '@/routes';
import ThemeProvider from '@/components/ThemeProvider';
import CustomNavigationContainer from '@/components/CustomNavigationContainer';

//My test.
const App = () => {
  return (
    <CustomNavigationContainer>
      <StyledSafeAreaView>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </StyledSafeAreaView>
    </CustomNavigationContainer>
  );
};

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;
export default App;
