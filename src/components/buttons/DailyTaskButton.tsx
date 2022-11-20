import React, {ReactElement} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import {useAppTheme} from '@app/hooks';

type DailyTaskButtonTypes = {
  title: number;
  size?: number;
  onPress: () => void;
  isMain: boolean;
};

export const DailyTaskButton = ({
  title,
  size = 125,
  onPress,
  isMain,
}: DailyTaskButtonTypes): ReactElement => {
  const {colors} = useAppTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          borderRadius: size / 2,
          width: size,
          height: size / 2,
          borderColor: isMain ? colors.mainBorder : colors.path,
          backgroundColor: isMain ? colors.primary : colors.primary,
        },
        styles.borders,
      ]}>
      <Text
        style={[
          {
            color: isMain ? colors.mainBorder : colors.path,
            fontSize: size / 3,
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  borders: {borderWidth: 2, alignItems: 'center', justifyContent: 'center'},
});
