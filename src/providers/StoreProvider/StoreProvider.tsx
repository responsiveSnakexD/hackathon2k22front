import React, {createContext, useMemo, useRef} from 'react';

import Root from '@app/stores';

import {StoreProviderProps} from './types';

export const StoresContext = createContext<Root | undefined>(undefined);

const StoresProvider: React.FC<StoreProviderProps> = ({children}) => {
  const root = useMemo(() => new Root(), []);
  const rootValue = useRef(root).current;

  return (
    <StoresContext.Provider value={rootValue}>
      {children}
    </StoresContext.Provider>
  );
};

export default StoresProvider;
