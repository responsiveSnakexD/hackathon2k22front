import React from 'react';
import {StatusBar, Platform, StyleSheet, Text} from 'react-native';

import {Header} from '@app/components/Header';
import {ButtonsScrollable} from '@app/components/buttons/ButtonsScrollable';
import useMachines from '@app/hooks/useMachines';
import {useSelector} from '@xstate/react';
import {Link} from 'expo-router';
import {StatusBar as ExpoStatusBar} from 'expo-status-bar';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useAppTheme} from '../src/hooks';

const App: React.FC = () => {
  const {colors} = useAppTheme();
  const {auth} = useMachines();
  const logged = useSelector(auth, (state) => state.matches('authenticated'));

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <Header exp={125} />
      <ButtonsScrollable />
      <Link href="/login">Go to login</Link>
      {logged ? <Text>logged</Text> : null}
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
