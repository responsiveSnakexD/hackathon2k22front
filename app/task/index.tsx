import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import API from '@app/api';
import {TaskData} from '@app/api/types';
import ImagePicker from '@app/components/ImagePicker';
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
  console.log('Siema');
  const {colors} = useAppTheme();
  const [taskData, setTaskData] = useState<TaskData | undefined>(undefined);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const {data} = await API.getTask(route.params.query.id);
        setTaskData(data);
      } catch {
        console.log('error');
        // navigation.navigate('login/index');
      }
    };
    fetchData();
  }, [navigation, route.params.query.id]);

  if (!taskData) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.goal}>
        <View style={styles.header}>
          <Title style={[{color: colors.onBackground, fontSize: 26}]}>
            {taskData.title}
          </Title>
          <BackHomeButton />
        </View>

        <Modal
          key={goalModal.icon}
          button={
            <TextIconButton
              icon={<Entypo name={goalModal.icon} size={24} color="white" />}
              text={goalModal.name}
              version="secondary"
              style={{
                padding: 10,
                width: 60,
                height: 60,
                borderRadius: 50,
                alignSelf: 'center',
              }}
            />
          }
          content={<Text style={styles.text}>{taskData.goal}</Text>}
        />
      </View>
      <View style={styles.buttonList}>
        {[descriptionModal, documentationModal].map((item) => (
          <Modal
            key={item.icon}
            button={
              <TextIconButton
                icon={<Entypo name={item.icon} size={24} color="white" />}
                text={item.name}
                version="secondary"
                style={styles.buttons}
              />
            }
            content={<Text style={styles.text}>{taskData[item.name]}</Text>}
          />
        ))}
      </View>
      <View style={styles.pickerContainer}>
        <ImagePicker />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    marginTop: 20,
    width: 300,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  goal: {
    flex: 0.9,
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    fontSize: 18,
  },
  buttonList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  buttons: {
    padding: 10,
    width: 150,
    height: 80,
    borderRadius: 50,
  },
  pickerContainer: {
    flex: 1,
  },
});

export default MainTask;
