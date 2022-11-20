import {DefaultTheme} from 'react-native-paper';

import commonTheme from './common';

export const lightTheme = {
  ...commonTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#BABD89',
    onPrimary: '#212738',
    secondary: '#F97068',
    onSecondary: '#212738',
    path: '#CB507F',
    pathBg: '#840B39',
    onPath: '#C43169',
    background: '#FFEAC2',
    onBackground: '#181527',
    accent: '#0F7173',
    onAccent: '#E7E1DA',
  },
};
