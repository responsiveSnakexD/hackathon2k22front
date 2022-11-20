export type AuthEvents =
  | {type: 'LOGIN'}
  | {type: 'LOGOUT'}
  | {type: 'LOGGED'}
  | {type: 'ERROR'};

export type AuthStates =
  | {value: 'unauthenticated'; context: undefined}
  | {value: 'authenticated'; context: undefined}
  | {value: 'loading'; context: undefined};
