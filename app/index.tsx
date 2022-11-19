import React from 'react';

import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {InfoComponent} from '../src/components/InfoComponent';

const App: React.FC = () => {
  const {colors} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <InfoComponent />
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
