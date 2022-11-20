import React, {FC, ReactNode, useEffect} from 'react';
import {useColorScheme, Appearance} from 'react-native';

import {Provider as PaperProvider} from 'react-native-paper';

import {darkTheme, lightTheme} from '../theme';

const ThemeProvider: FC<{children: ReactNode}> = ({children}) => {
  const [scheme, setScheme] = React.useState(useColorScheme());
  useEffect(() => {
    const event = Appearance.addChangeListener(({colorScheme}) => {
      setScheme(colorScheme);
    });
    return () => event.remove();
  });

  return (
    <PaperProvider theme={scheme === 'dark' ? darkTheme : lightTheme}>
      {children}
    </PaperProvider>
  );
};

export default ThemeProvider;
