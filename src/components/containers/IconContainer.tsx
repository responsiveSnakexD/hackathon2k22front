import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';

import globalStyles from '@app/globalStyles';
import {useAppTheme} from '@app/hooks';

export const IconContainer: React.FC<{
  children: ReactNode;
  version: 'primary' | 'secondary' | 'accent';
}> = ({children, version}) => {
  const {colors} = useAppTheme();
  const backgroundColor =
    version === 'primary'
      ? colors.primary
      : version === 'secondary'
      ? colors.secondary
      : colors.accent;
  return <View style={[styles.container, {backgroundColor}]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 48,
  },
});
