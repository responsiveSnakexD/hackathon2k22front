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
    path: '#F25F5C',
    background: '#FFEAC2',
    onBackground: '#181527',
    accent: '#A09BE7',
    onAccent: '#212738',
  },
};
