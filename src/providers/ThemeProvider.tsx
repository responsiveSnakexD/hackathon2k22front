import React, {FC, ReactNode, useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {useColorScheme, Appearance} from 'react-native';
import {darkTheme, lightTheme} from '../theme';

const ThemeProvider: FC<{children: ReactNode}> = ({children}) => {
  const [scheme, setScheme] = React.useState(useColorScheme());
  console.log(scheme);
  useEffect(() => {
    Appearance.addChangeListener(({colorScheme}) => {
      setScheme(colorScheme);
    });
  });
  return (
    <PaperProvider theme={scheme === 'dark' ? darkTheme : lightTheme}>
      {children}
    </PaperProvider>
  );
};

export default ThemeProvider;
