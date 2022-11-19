import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {Header} from '@app/components/Header';
import {ButtonsScrollable} from '@app/components/buttons/ButtonsScrollable';
import {DailyTaskButton} from '@app/components/buttons/DailyTaskButton';
import {RankingButton} from '@app/components/buttons/RankingButton';
import useMachines from '@app/hooks/useMachines';
import {Task} from '@app/types/Task';
import {useSelector} from '@xstate/react';
import {Link} from 'expo-router';
import {StatusBar} from 'expo-status-bar';

import {useAppTheme} from '../src/hooks';

const App: React.FC = () => {
  const {colors} = useAppTheme();
  const {auth} = useMachines();
  const logged = useSelector(auth, (state) => state.matches('authenticated'));

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Header exp={125} />
      <ButtonsScrollable />
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
