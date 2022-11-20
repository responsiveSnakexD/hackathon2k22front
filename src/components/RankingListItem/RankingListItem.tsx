import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {useAppTheme} from '@app/hooks';
import {rgba} from 'polished';

import {RankingListItemProps} from './type';

export const RankingListItem: React.FC<RankingListItemProps> = ({
  name,
  score,
  position,
}) => {
  const {colors} = useAppTheme();
  const isCurrentUser = name === 'Me'; // TODO: get current user name from context

  const isOtherOdd = position > 3 && position % 2 === 1;
  const isFirst = position === 1;
  const isSecond = position === 2;
  const isThird = position === 3;
  const {color, backgroundColor} = isFirst
    ? styles.first
    : isSecond
    ? styles.second
    : isThird
    ? styles.third
    : {
        color: colors.onBackground,
        backgroundColor: isOtherOdd
          ? rgba(colors.onBackground, 0.1)
          : 'transparent',
      };

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Text style={[styles.text, {color}]}>{position}</Text>
      <Text
        style={[
          styles.text,
          {color: isCurrentUser ? colors.secondary : color},
          isCurrentUser && styles.currentUser,
        ]}>
        {name}
      </Text>
      <Text style={[styles.text, {color}]}>{score}</Text>
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
    backgroundColor: rgba('#EFC75A', 0.5),
    color: '#000',
  },
  second: {
    backgroundColor: rgba('#B5B2B0', 0.5),
    color: '#000',
  },
  third: {
    backgroundColor: rgba('#925927', 0.5),
    color: '#000',
  },
  currentUser: {
    fontWeight: 'bold',
  },
});
