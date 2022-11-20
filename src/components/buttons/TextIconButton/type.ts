import {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export type TextIconButtonProps = {
  text?: string;
  icon: ReactNode;
  version?: 'primary' | 'secondary' | 'accent';
  style?: StyleProp<ViewStyle>;
};
