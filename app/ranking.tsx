import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import {RankingListItem} from '@app/components/RankingListItem';
import {RankingListItemProps} from '@app/components/RankingListItem/type';
import {BackHomeButton} from '@app/components/buttons/BackHomeButton';
import {useAppTheme} from '@app/hooks';
import {Title} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

const Ranking: React.FC = () => {
  const people: RankingListItemProps[] = [
    {
      name: 'John',
      score: 100,
      position: 1,
    },
    {
      name: 'Jack',
      score: 90,
      position: 2,
    },
    {
      name: 'Jill',
      score: 80,
      position: 3,
    },
    {
      name: 'John2',
      score: 100,
      position: 4,
    },
    {
      name: 'Jack2',
      score: 90,
      position: 5,
    },
    {
      name: 'Jill2',
      score: 80,
      position: 6,
    },
    {
      name: 'John3',
      score: 100,
      position: 7,
    },
    {
      name: 'Jack3',
      score: 90,
      position: 8,
    },
    {
      name: 'Jill3',
      score: 80,
      position: 9,
    },
    {
      name: 'John4',
      score: 100,
      position: 10,
    },
    {
      name: 'Jack4',
      score: 90,
      position: 11,
    },
    {
      name: 'Jill4',
      score: 80,
      position: 12,
    },
    {
      name: 'John5',
      score: 100,
      position: 13,
    },
    {
      name: 'Me',
      score: 70,
      position: 23,
    },
    {
      name: 'Jack5',
      score: 90,
      position: 14,
    },
    {
      name: 'Jill5',
      score: 80,
      position: 15,
    },
    {
      name: 'John6',
      score: 100,
      position: 16,
    },
    {
      name: 'Jack6',
      score: 90,
      position: 17,
    },
    {
      name: 'Jill6',
      score: 80,
      position: 18,
    },
    {
      name: 'John7',
      score: 100,
      position: 19,
    },
    {
      name: 'Jack7',
      score: 90,
      position: 20,
    },
    {
      name: 'Jill7',
      score: 80,
      position: 21,
    },
    {
      name: 'John8',
      score: 100,
      position: 22,
    },
    {
      name: 'Jill8',
      score: 80,
      position: 24,
    },
    {
      name: 'John9',
      score: 100,
      position: 25,
    },
    {
      name: 'Jack9',
      score: 90,
      position: 26,
    },
    {
      name: 'Jill9',
      score: 80,
      position: 27,
    },
    {
      name: 'John10',
      score: 100,
      position: 28,
    },
    {
      name: 'Jack10',
      score: 90,
      position: 29,
    },
  ];
  const sortedPeople = people.sort((a, b) => a.position - b.position);
  const firstThree = sortedPeople.slice(0, 3);
  const restPeople = sortedPeople.slice(3);
  const {colors} = useAppTheme();
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.header}>
        <Title style={{color: colors.onBackground}}>Giraffe Loves Them</Title>
        <BackHomeButton />
      </View>
      <View>
        {firstThree.map((person) => (
          <RankingListItem
            key={person.name}
            name={person.name}
            score={person.score}
            position={person.position}
          />
        ))}
      </View>
      <ScrollView>
        {restPeople.map((person) => (
          <RankingListItem key={person.name} {...person} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    height: 100,
  },
});

export default Ranking;
