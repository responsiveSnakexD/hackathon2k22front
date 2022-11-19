import React, {createContext, useRef} from 'react';

import useStore from '@app/hooks/useStore';
import {useInterpret} from '@xstate/react';

import {Machines, MachinesProviderProps} from './types';

export const MachinesContext = createContext<Machines | undefined>(undefined);

const MachinesProvider: React.FC<MachinesProviderProps> = ({children}) => {
  const root = useRef(useStore()).current;
  const authValue = useInterpret(root.machines().auth);

  const auth = useRef({auth: authValue}).current;

  return (
    <MachinesContext.Provider value={auth}>{children}</MachinesContext.Provider>
  );
};

export default MachinesProvider;
