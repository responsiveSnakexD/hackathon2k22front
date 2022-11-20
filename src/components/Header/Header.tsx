import React, {ReactElement} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {InfoComponent} from '../InfoComponent/InfoComponent';
import MainTaskButton from '../buttons/MainTaskButton';
import {RankingButton} from '../buttons/RankingButton';
import {HeaderProps} from './type';

export const Header = ({
  exp,
  campaignData: {description, title},
  mainTask,
  navigate,
}: HeaderProps): ReactElement => {
  return (
    <View style={styles.container}>
      <RankingButton exp={exp} navigate={navigate} />
      <View style={styles.innerShelf}>
        <InfoComponent campaignName={title} campaignDescription={description} />
        {mainTask ? (
          <MainTaskButton id={mainTask.task_id} />
        ) : (
          <Text>No main task!</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-around',
    paddingLeft: 10,
  },
  innerShelf: {
    paddingRight: 10,
    display: 'flex',
    flex: 0.4,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  },
});
