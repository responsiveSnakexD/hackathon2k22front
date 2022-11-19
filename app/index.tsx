import React from 'react';

import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {InfoComponent} from '../src/components/InfoComponent';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <InfoComponent />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
