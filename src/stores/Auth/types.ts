export type AuthEvents = {type: 'LOGIN'} | {type: 'LOGOUT'};

export type AuthStates =
  | {value: 'unauthenticated'; context: undefined}
  | {value: 'authenticated'; context: undefined};
