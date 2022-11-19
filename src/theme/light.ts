import {DefaultTheme} from 'react-native-paper';
import commonTheme from './common';

export const lightTheme = {
  ...commonTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF6663',
    onPrimary: '#E0FF4F',
    secondary: '#0B3954',
    onSecondary: '#E0FF4F',
    background: '#BFD7EA',
    onBackground: '#0B3954',
    accent: '#E0FF4F',
  },
};
