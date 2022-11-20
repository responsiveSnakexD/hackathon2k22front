import {ReactNode} from 'react';

export type SendButtonProps = {
  children: ReactNode;
  onPress: () => void | Promise<void>;
  disabled?: boolean;
};
