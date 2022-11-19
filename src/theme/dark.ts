import {DefaultTheme} from 'react-native-paper';
import commonTheme from './common';
import {Theme} from './type';

export const darkTheme: Theme = {
  ...commonTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#F7DD72',
    onPrimary: '#0B3954',
    secondary: '#5AB1BB',
    onSecondary: '#0B3954',
    background: '#1E152A',
    onBackground: '#F7DD72',
    accent: '#A5C882',
  },
};
