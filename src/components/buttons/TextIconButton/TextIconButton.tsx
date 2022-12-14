import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import globalStyles from '@app/globalStyles';
import {useAppTheme} from '@app/hooks';

import {TextIconButtonProps} from './type';

export const TextIconButton: React.FC<TextIconButtonProps> = ({
  style: additionalStyles,
  text,
  icon,
  version = 'primary',
}) => {
  const {colors} = useAppTheme();
  const backgroundColor =
    version === 'primary'
      ? colors.primary
      : version === 'secondary'
      ? colors.secondary
      : colors.accent;
  const textColor =
    version === 'primary'
      ? colors.onPrimary
      : version === 'secondary'
      ? colors.onSecondary
      : colors.onAccent;
  return (
    <View
      style={[
        globalStyles.button,
        styles.container,
        {backgroundColor},
        additionalStyles,
      ]}>
      {text && <Text style={{color: textColor}}>{text}</Text>}
      {icon}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
