import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

//Resolve Problem  jest error Invariant Violation
require('react-native-reanimated/lib/reanimated2/jestUtils').setUpTests();

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');

  return {
    __esModule: true,
    ...originalModule,
    useFocusEffect: jest.fn(),
    useNavigation: jest.fn(() => jest.fn),
    useRoute: () => ({
      params: {
        id: jest.fn
      }
    }),
    useIsFocused: jest.fn()
  };
});

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('react-native-safe-area-context', () => {
  return {
    useSafeAreaInsets: () => {
      return {
        bottom: 0,
        top: 0
      };
    }
  };
});
