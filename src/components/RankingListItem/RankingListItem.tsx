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
  let backgroundColor: string;
  let color: string = colors.onBackground;

  switch (position) {
    case 1:
      backgroundColor = styles.first.backgroundColor;
      color = styles.first.color;
      break;
    case 2:
      backgroundColor = styles.second.backgroundColor;
      color = styles.second.color;
      break;
    case 3:
      backgroundColor = styles.third.backgroundColor;
      color = styles.third.color;
      break;
    default:
      if (position % 2 === 0) {
        backgroundColor = rgba(colors.primary, 0.1);
      } else {
        backgroundColor = 'transparent';
      }
  }

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
