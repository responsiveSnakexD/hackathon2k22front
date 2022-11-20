import React from 'react';
import {StatusBar, Platform, StyleSheet} from 'react-native';

import {Header} from '@app/components/Header/Header';
import {ButtonsScrollable} from '@app/components/buttons/ButtonsScrollable';
import {PageProps} from '@app/types/pageprops';
import {StatusBar as ExpoStatusBar} from 'expo-status-bar';
import {SafeAreaView} from 'react-native-safe-area-context';

import Giraffe from '../assets/Girafe.svg';
import {useAppTheme} from '../src/hooks';

const App: React.FC<PageProps> = ({navigation: {navigate}}) => {
  const {colors} = useAppTheme();

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <Header exp={125} navigate={navigate} />

      <Giraffe width="100" height="100" />

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
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default App;
