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
    path: '#D66A68',
    pathBg: '#17132A',
    onPath: '#F9DBBD',
    background: '#17132A',
    onBackground: '#FFE066',
    accent: '#00798C',
    onAccent: '#E7E1DA',
    error: '#A11A1A',
    mainBorder: '#69DDFF',
    mainBg: '#006494',
    compleatedText: '#FAD5D5',
  },
};
