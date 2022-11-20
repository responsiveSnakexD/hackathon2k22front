import {useAppTheme} from '@app/hooks';
import {darken} from 'polished';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RankingListItemProps} from './type';

export const RankingListItem: React.FC<RankingListItemProps> = ({
  name,
  score,
  position,
}) => {
  const {colors} = useAppTheme();
  const isCurrentUser = name === 'Me'; // TODO: get current user name from context
  const isFirst = position === 1;
  const isSecond = position === 2;
  const isThird = position === 3;
  const isOtherOdd = position > 3 && !isCurrentUser && position % 2 === 1;
  return (
    <View
      style={[
        styles.container,
        isCurrentUser && {backgroundColor: colors.primary},
        isFirst && {backgroundColor: '#EFC75A'},
        isSecond && {backgroundColor: '#B5B2B0'},
        isThird && {backgroundColor: '#925927'},
        isOtherOdd && {backgroundColor: darken(0.05, colors.background)},
      ]}>
      <Text style={styles.text}>{position}</Text>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderWidth: 0.3,
    borderColor: 'grey',
  },
  text: {
    fontSize: 20,
  },
  first: {
    backgroundColor: '#EFC75A',
  },
});
