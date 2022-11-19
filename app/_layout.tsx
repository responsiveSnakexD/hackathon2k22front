import React from 'react';

import MachinesProvider from '@app/providers/MachinesProvider';
import StoresProvider from '@app/providers/StoreProvider';
import ThemeProvider from '@app/providers/ThemeProvider';
import {Stack} from 'expo-router';

const Layout: React.FC = () => {
  return (
    <StoresProvider>
      <MachinesProvider>
        <ThemeProvider>
          <Stack />
        </ThemeProvider>
      </MachinesProvider>
    </StoresProvider>
  );
};

export default Layout;
