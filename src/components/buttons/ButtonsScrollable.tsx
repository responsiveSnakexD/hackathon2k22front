import React, {Fragment} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';

import {useAppTheme} from '@app/hooks';
import {Task} from '@app/types/Task';

import Turtle from '../../../assets/turtle.svg';
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
    <View style={styles.container}>
      <View style={styles.turtle}>
        <Turtle width="200" height="200" />
      </View>
      <ScrollView horizontal>
        <View style={styles.path}>
          {tasks.map((task) => (
            <Fragment key={task.id}>
              <DailyTaskButton
                isDone={task.isDone}
                isMain={task.isMain}
                title={task.id}
                onPress={() => console.log('clicked')}
              />
              <View
                style={[
                  {
                    backgroundColor: colors.onPath,
                  },
                  styles.line,
                ]}
              />
            </Fragment>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 0.6,
    alignContent: 'flex-end',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  path: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  turtle: {
    margin: 10,
  },
  line: {
    height: 1,
    width: 60,
  },
});
