import {useContext} from 'react';

import {StoresContext} from '@app/providers/StoreProvider/StoreProvider';
import Root from '@app/stores';

const useStore = (): Root => {
  const store = useContext(StoresContext);

  if (!store) throw new Error('Store not avaliable within given context');

  return store;
};

export default useStore;
