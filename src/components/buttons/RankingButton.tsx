import React, {ReactElement} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

import {useAppTheme} from '@app/hooks';
import {Link} from 'expo-router';

type Props = {
  exp: number;
  navigate: (page: string) => void;
};

export const RankingButton: React.FC<Props> = ({exp, navigate}) => {
  const {colors} = useAppTheme();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigate('ranking')}
        style={[
          {
            borderColor: colors.onBackground,
          },
          styles.borders,
        ]}>
        <Text style={[{color: colors.onBackground}]}>exp</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  borders: {
    borderRadius: 50,
    width: 50,
    height: 50,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
});
