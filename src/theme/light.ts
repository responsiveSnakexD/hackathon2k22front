import {DefaultTheme} from 'react-native-paper';

import commonTheme from './common';

export const lightTheme = {
  ...commonTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#BABD89',
    onPrimary: '#212738',
    secondary: '#533A7B',
    onSecondary: '#CBC1DC',
    path: '#CB507F',
    pathBg: '#840B39',
    onPath: '#C43169',
    background: '#FFEAC2',
    onBackground: '#FD693C',
    accent: '#0F7173',
    onAccent: '#E7E1DA',
    error: '#C42B2B',
    mainBorder: '#69DDFF',
    mainBg: '#006494',
    compleatedText: '#FAD5D5',
  },
};
