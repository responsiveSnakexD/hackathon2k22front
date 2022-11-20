import React, {Fragment} from 'react';
import {ScrollView, View} from 'react-native';

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

export const ButtonsScrollable = () => {
  const {colors} = useAppTheme();
  return (
    <ScrollView horizontal>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {tasks.map((task) => (
          <Fragment key={task.id}>
            <DailyTaskButton
              title={task.id}
              onPress={() => console.log('clicked')}
            />
            <View
              style={{
                height: 1,
                backgroundColor: colors.onBackground,
                width: 60,
              }}
            />
          </Fragment>
        ))}
      </View>
    </ScrollView>
  );
};
