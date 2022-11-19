import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';

import {useAppTheme} from '@app/hooks';
import {path} from 'xstate/lib/utils';

type DailyTaskButtonTypes = {
  title: number;
  size?: number;
  onPress: () => void;
};

export const DailyTaskButton = ({
  title,
  size = 125,
  onPress,
}: DailyTaskButtonTypes) => {
  const {colors} = useAppTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          borderRadius: size / 2,
          width: size,
          height: size / 2,
          borderColor: colors.onBackground,
        },
        styles.borders,
      ]}>
      <Text style={[{color: colors.onBackground, fontSize: size / 3}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  borders: {borderWidth: 2, alignItems: 'center', justifyContent: 'center'},
});
