import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import API from '@app/api';
import {TaskData} from '@app/api/types';
import {Modal} from '@app/components/Modal';
import {BackHomeButton} from '@app/components/buttons/BackHomeButton';
import {TextIconButton} from '@app/components/buttons/TextIconButton';
import {useAppTheme} from '@app/hooks';
import {Entypo} from '@expo/vector-icons';
import {Title} from 'react-native-paper';

import {MainTaskPageProps} from './types';

type ModalItem = {
  name: 'description' | 'goal' | 'documentation';
  icon: React.ComponentProps<typeof Entypo>['name'];
};

const descriptionModal: ModalItem = {
  name: 'description',
  icon: 'open-book',
};
const goalModal: ModalItem = {
  name: 'goal',
  icon: 'trophy',
};
const documentationModal: ModalItem = {
  name: 'documentation',
  icon: 'book',
};

const MainTask: React.FC<MainTaskPageProps> = ({route, navigation}) => {
  const {colors} = useAppTheme();
  const [taskData, setTaskData] = useState<TaskData | undefined>(undefined);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const {data} = await API.getTask(
          route.params.query.id,
          route.params.query.campaignId,
        );
        setTaskData(data);
      } catch {
        navigation.navigate('login/index');
      }
    };
    fetchData();
  }, [navigation, route.params.query.campaignId, route.params.query.id]);

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      {taskData ? (
        <>
          <Title style={[{color: colors.onBackground}]}>{taskData.title}</Title>
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
                content={<Text>{taskData[item.name]}</Text>}
              />
            ))}
          </View>
        </>
      ) : (
        <Text>loading...</Text>
      )}
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
