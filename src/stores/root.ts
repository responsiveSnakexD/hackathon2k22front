import auth from './Auth';
import {StoreMachines} from './types';

export default class Root {
  private auth: typeof auth;

  constructor() {
    this.auth = auth;
  }

  machines(): StoreMachines {
    return {
      auth: this.auth,
    };
  }
}
