/* eslint-disable @typescript-eslint/no-explicit-any */
import {ReactNode} from 'react';

import {AuthEvents, AuthStates} from '@app/stores/Auth/types';
import {Interpreter} from 'xstate';

export type MachinesProviderProps = {
  children: ReactNode;
};

export type Machines = {
  auth: Interpreter<undefined, AuthStates, AuthEvents, AuthStates, any>;
};
