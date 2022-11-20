import {createMachine} from 'xstate';

import {AuthEvents, AuthStates} from './types';

const Auth = createMachine<undefined, AuthEvents, AuthStates>({
  initial: 'unauthenticated',
  states: {
    unauthenticated: {
      on: {
        LOGIN: {
          target: 'authenticated',
        },
      },
    },
    loading: {
      on: {
        LOGGED: 'authenticated',
        ERROR: 'unauthenticated',
      },
    },
    authenticated: {
      on: {
        LOGOUT: {
          target: 'unauthenticated',
        },
      },
    },
  },
});

export default Auth;
