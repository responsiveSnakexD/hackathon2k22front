import {ReactNode} from 'react';

export type TextIconButtonProps = {
  text: string;
  icon: ReactNode;
  version?: 'primary' | 'secondary' | 'accent';
};
