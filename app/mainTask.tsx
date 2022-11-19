import {BackHomeButton} from '@app/components/buttons/BackHomeButton';
import {TextIconButton} from '@app/components/buttons/TextIconButton';
import {Modal} from '@app/components/Modal';
import {useAppTheme} from '@app/hooks';
import {Entypo} from '@expo/vector-icons';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';

type MainTaskProps = {
  title: string;
  description: string;
  goal: string;
  documentation: string;
};

const title = 'Develop curiosity';
const description =
  'In many cases, intolerance towards others is caused by the lack of understanding. In your first mission you will be increasing your knowledge about other cultures. Pick yourself 6 cultures different than yours and try to make a comparsion of their lifestyles, traditions and goals.You can do it simply by reading about them, or personnaly experience different culture, by getting to know each other, be it online or in reality.';
const goal = `
Broaden your horizons and increase your ability 
to understand and accept others. After the task is 
completed, try to share your knowledge in your neighbourhood.
`;
const documentation = `
Record 6 voice messages about other cultures during this month. 
Try to see as many positive aspects as you can.
`;
const MainTask: React.FC = () => {
  const {colors} = useAppTheme();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Title style={[{color: colors.onBackground}]}>{title}</Title>
      <BackHomeButton />
      <Text style={[styles.text, {color: colors.onBackground}]}>
        <Modal
          button={
            <TextIconButton
              text="description"
              icon={
                <Entypo
                  name="open-book"
                  size={24}
                  color={colors.onBackground}
                />
              }
            />
          }
          content={<Text>{description}</Text>}
        />
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
  },
});

export default MainTask;
