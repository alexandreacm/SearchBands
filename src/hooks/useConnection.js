import { useNetInfo } from '@react-native-community/netinfo';

const useConnection = () => {
  const { isConnected } = useNetInfo();
  return {
    connected: isConnected
  };
};

export default useConnection;
