import {DefaultTheme} from 'react-native-paper';
import commonTheme from './common';

export const darkTheme = {
  ...commonTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#F7DD72',
    secondary: '#5AB1BB',
    background: '#1E152A',
    accent: '#A5C882',
  },
};
