import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import useMachines from '@app/hooks/useMachines';
import {useSelector} from '@xstate/react';
import {Link} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import {useTheme} from 'react-native-paper';

const App: React.FC = () => {
  const {colors} = useTheme();
  const {auth} = useMachines();
  const logged = useSelector(auth, (state) => state.matches('authenticated'));

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Text style={[styles.text, {color: colors.primary}]}>
        Open up App.tsx to start working on your app!!!
      </Text>
      <Link href="/login">Go to login</Link>
      {logged ? <Text>logged</Text> : null}
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default App;
