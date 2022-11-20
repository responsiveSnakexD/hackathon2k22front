import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Modal} from '@app/components/Modal';
import {BackHomeButton} from '@app/components/buttons/BackHomeButton';
import {TextIconButton} from '@app/components/buttons/TextIconButton';
import {useAppTheme} from '@app/hooks';
import {Entypo} from '@expo/vector-icons';
import {Title} from 'react-native-paper';

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

  type ModalItem = {
    name: string;
    text: string;
    icon: React.ComponentProps<typeof Entypo>['name'];
  };

  const descriptionModal: ModalItem = {
    name: 'description',
    text: description,
    icon: 'open-book',
  };
  const goalModal: ModalItem = {
    name: 'goal',
    text: goal,
    icon: 'trophy',
  };
  const documentationModal: ModalItem = {
    name: 'documentation',
    text: documentation,
    icon: 'book',
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Title style={[{color: colors.onBackground}]}>{title}</Title>
      <BackHomeButton />
      <View style={styles.buttonList}>
        {[descriptionModal, goalModal, documentationModal].map((item) => (
          <Modal
            key={item.icon}
            button={
              <TextIconButton
                icon={<Entypo name={item.icon} size={24} color="white" />}
                text={item.name}
              />
            }
            content={<Text>{item.text}</Text>}
          />
        ))}
      </View>
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
  buttonList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default MainTask;
