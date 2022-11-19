import {DefaultTheme} from 'react-native-paper';
import commonTheme from './common';

export const lightTheme = {
  ...commonTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF6663',
    secondary: '#0B3954',
    background: '#BFD7EA',
    accent: '#E0FF4F',
  },
};
