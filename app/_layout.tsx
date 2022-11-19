import {Stack} from 'expo-router';
import React, {FC} from 'react';
import ThemeProvider from '../src/providers/ThemeProvider';

const Layout: FC = () => {
  return (
    <ThemeProvider>
      <Stack />
    </ThemeProvider>
  );
};

export default Layout;
