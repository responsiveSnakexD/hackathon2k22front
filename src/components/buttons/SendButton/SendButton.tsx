import React from 'react';
import {StyleSheet} from 'react-native';

import {useAppTheme} from '@app/hooks';
import {Button} from 'react-native-paper';

import {SendButtonProps} from './types';

const SendButton: React.FC<SendButtonProps> = ({
  children,
  onPress,
  disabled,
}) => {
  const {colors} = useAppTheme();

  return (
    <Button
      disabled={disabled}
      onPress={!disabled ? onPress : undefined}
      style={[styles.buttonStyles, {backgroundColor: colors.secondary}]}
      labelStyle={disabled ? {color: colors.disabled} : undefined}>
      {children}
    </Button>
  );
};

const styles = StyleSheet.create({
  buttonStyles: {
    borderRadius: 10,
  },
});

export default SendButton;
