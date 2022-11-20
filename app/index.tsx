import React from 'react';
import {StatusBar, Platform, StyleSheet, View} from 'react-native';

import {Header} from '@app/components/Header';
import {ButtonsScrollable} from '@app/components/buttons/ButtonsScrollable';
import {StatusBar as ExpoStatusBar} from 'expo-status-bar';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useAppTheme} from '../src/hooks';

const App: React.FC = () => {
  const {colors} = useAppTheme();

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <Header exp={125} />
      <ButtonsScrollable />
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
  },
});

export default App;
