import React from 'react';
import {ScrollView, View} from 'react-native';

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
    isMain: false,
  },
  {
    id: 3,
    isDone: false,
    isMain: false,
  },
  {
    id: 4,
    isDone: false,
    isMain: false,
  },
];

export const ButtonsScrollable = () => {
  return (
    <ScrollView horizontal>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
