import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

import {useAppTheme} from '@app/hooks';

type RankingButtonTypes = {
  exp: number;
  onPress: () => void;
};

export const RankingButton = ({exp, onPress}: RankingButtonTypes) => {
  const {colors} = useAppTheme();
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          {
            borderColor: colors.onBackground,
          },
          styles.borders,
        ]}>
        <Text style={[{color: colors.onBackground}]}>{exp}</Text>
      </TouchableOpacity>
    </View>
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
