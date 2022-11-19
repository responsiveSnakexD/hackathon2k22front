import {ReactNode} from 'react';

export type TextIconButtonProps = {
  text: string;
  icon: ReactNode;
  onPress: () => void;
};
