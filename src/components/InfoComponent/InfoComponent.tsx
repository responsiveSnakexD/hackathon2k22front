import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import {Text, Title} from 'react-native-paper';
import globalStyles from '@app/globalStyles';
import {useAppTheme} from '../../hooks';
import {InfoComponentProps} from './type';
import {Modal} from '../Modal';

export const InfoComponent: React.FC<InfoComponentProps> = ({
  campaignDescription,
  campaignName,
}) => {
  const {colors} = useAppTheme();

  return (
    <Modal
      content={
        <>
          <Title style={[styles.title, {color: colors.onAccent}]}>
            {campaignName}
          </Title>
          <ScrollView>
            <Text style={(styles.description, [{color: colors.onAccent}])}>
              {campaignDescription}
            </Text>
          </ScrollView>
        </>
      }
      button={
        <View style={[globalStyles.button, {backgroundColor: colors.accent}]}>
          <Entypo name="info" size={24} color="white" />
        </View>
      }
      backgroundColor={colors.accent}
      isFullScreen
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    margin: 10,
    padding: 10,
    textAlign: 'center',
    whiteSpace: 'pre',
  },
});
