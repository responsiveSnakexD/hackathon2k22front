import {DefaultTheme} from 'react-native-paper';
import commonTheme from './common';
import {Theme} from './type';

export const darkTheme: Theme = {
  ...commonTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#5F444C',
    onPrimary: '#E7E1DA',
    secondary: '#5AB1BB',
    onSecondary: '#E7E1DA',
    background: '#17132A',
    onBackground: '#D7CDC1',
    accent: '#00798C',
  },
};
