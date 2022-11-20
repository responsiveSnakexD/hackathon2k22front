import React from 'react';
import {View, StyleSheet} from 'react-native';

import globalStyles from '@app/globalStyles';
import {useAppTheme} from '@app/hooks';
import {Entypo} from '@expo/vector-icons';
import {Link} from 'expo-router';

export const MainTaskButton: React.FC = () => {
  const {colors} = useAppTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      <Link href="/mainTask">
        <Entypo name="address" size={24} color={colors.onPrimary} />
      </Link>
    </View>
  );
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
