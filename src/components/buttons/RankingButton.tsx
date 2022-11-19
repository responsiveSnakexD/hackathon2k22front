import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

import {useAppTheme} from '@app/hooks';

type RankingButtonTypes = {
  exp: number;
};

export const RankingButton = ({exp}: RankingButtonTypes) => {
  const {colors} = useAppTheme();
  return (
    <TouchableOpacity
      style={[
        {
          borderColor: colors.onBackground,
        },
        styles.borders,
      ]}>
      <Text style={[{color: colors.onBackground}]}>{exp}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  borders: {
    borderRadius: 50,
    width: 50,
    height: 50,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
