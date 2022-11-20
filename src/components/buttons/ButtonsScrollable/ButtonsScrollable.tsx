import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';

import {useAppTheme} from '@app/hooks';

import Turtle from '../../../../assets/turtle.svg';
import {DailyTaskButton} from '../DailyTaskButton';
import {ButtonsScrollableProps} from './types';

const ButtonsScrollable: React.FC<ButtonsScrollableProps> = ({
  tasks,
  navigate,
  campaignId,
}) => {
  const {colors} = useAppTheme();

  return (
    <View style={styles.container}>
      <View style={styles.turtle}>
        <Turtle width="200" height="200" />
      </View>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        {tasks.map(({task_id, big_task}, key) => (
          <React.Fragment key={task_id}>
            <DailyTaskButton
              isMain={big_task}
              title={key}
              onPress={() => {
                navigate('task/index', {query: {id: task_id, campaignId}});
              }}
            />
            <View
              style={[
                {
                  backgroundColor: colors.onPath,
                },
                styles.line,
              ]}
            />
          </React.Fragment>
        ))}
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
  scrollView: {
    alignItems: 'center',
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

export default ButtonsScrollable;
