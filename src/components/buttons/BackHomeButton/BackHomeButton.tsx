import {useAppTheme} from '@app/hooks';
import {AntDesign} from '@expo/vector-icons';
import {Link} from 'expo-router';
import React from 'react';
import {View, StyleSheet} from 'react-native';

export const BackHomeButton: React.FC = () => {
  const {colors} = useAppTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      <Link href="/">
        <AntDesign name="home" size={24} color={colors.onPrimary} />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 10,
    margin: 30,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
