import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import HomeStack from '@/routes/stacks/HomeStack';
import useConnection from '@/hooks/useConnection';
import OffLineStack from '@/routes/stacks/OffLineStack';

const Route = () => {
  const { connected } = useConnection();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return !connected ? <OffLineStack /> : <HomeStack />;
};

export default Route;
