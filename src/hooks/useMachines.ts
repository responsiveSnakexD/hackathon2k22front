import {useContext} from 'react';

import {MachinesContext} from '@app/providers/MachinesProvider/MachinesProvider';
import {Machines} from '@app/providers/MachinesProvider/types';

const useMachines = (): Machines => {
  const machines = useContext(MachinesContext);

  if (!machines) throw new Error('No machines within given context');

  return machines;
};

export default useMachines;
