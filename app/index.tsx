import React, {useEffect, useState} from 'react';
import {StatusBar, Platform, StyleSheet, Text} from 'react-native';

import API from '@app/api';
import {CampaignPreview, TaskPreview} from '@app/api/types';
import {Header} from '@app/components/Header';
import ButtonsScrollable from '@app/components/buttons/ButtonsScrollable';
import {PageProps} from '@app/types/pageprops';
import {getFutureTasks, getMostCurrentTask} from '@app/utils/helpers';
import {StatusBar as ExpoStatusBar} from 'expo-status-bar';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useAppTheme} from '../src/hooks';

const App: React.FC<PageProps> = ({navigation}) => {
  const {colors} = useAppTheme();
  const [campaignData, setCampaignData] = useState<CampaignPreview | undefined>(
    undefined,
  );
  const [tasks, setTasks] = useState<Array<TaskPreview> | undefined>(undefined);
  const [mainTask, setMainTask] = useState<TaskPreview | undefined>(undefined);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        await API.getToken();
        const {data: fetchedCampaignData} = await API.getCurrentCampaign();
        setCampaignData(fetchedCampaignData);
        const tasksData = await API.getAllTasks(
          fetchedCampaignData.camapign_id,
        );
        setTasks(tasksData);
        setMainTask(getMostCurrentTask(getFutureTasks(tasksData)));
      } catch {
        navigation.navigate('login/index');
      }
    };
    fetchData();
  }, [navigation]);

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}>
      {campaignData ? (
        <>
          <Header
            exp={125}
            campaignData={campaignData}
            mainTask={mainTask}
            navigate={navigation.navigate}
          />
          {tasks && (
            <ButtonsScrollable
              tasks={tasks}
              navigate={navigation.navigate}
              campaignId={campaignData.camapign_id}
            />
          )}
        </>
      ) : (
        <Text>No current campaign!</Text>
      )}
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
  },
});

export default App;
