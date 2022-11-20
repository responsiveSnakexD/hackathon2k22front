import React, {Fragment} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';

import {useAppTheme} from '@app/hooks';
import {Task} from '@app/types/Task';

import {DailyTaskButton} from './DailyTaskButton';

const tasks: Task[] = [
  {
    id: 1,
    isDone: true,
    isMain: false,
  },
  {
    id: 2,
    isDone: false,
    isMain: true,
  },
  {
    id: 3,
    isDone: false,
    isMain: true,
  },
  {
    id: 4,
    isDone: false,
    isMain: false,
  },
];

export const ButtonsScrollable: React.FC = () => {
  const {colors} = useAppTheme();
  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        {tasks.map((task) => (
          <>
            <DailyTaskButton
              title={task.id}
              onPress={() => console.log('clicked')}
            />
            <View
              style={{
                height: 1,
                backgroundColor: 'white',
                width: 60,
              }}
            />
          </>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  line: {
    height: 1,
    backgroundColor: 'white',
    width: 60,
  },
});
