import React, {FC, useState} from 'react';
import {StyleSheet, Pressable, View, ScrollView} from 'react-native';

import {Entypo} from '@expo/vector-icons';
import {Text, Title} from 'react-native-paper';

import {useAppTheme} from '../../hooks';
import {Modal} from '../Modal';
import {TextIconButton} from '../buttons/TextIconButton';
import {InfoComponentProps} from './type';

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
        <TextIconButton
          icon={<Entypo name="info" size={24} color="white" />}
          version="accent"
        />
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
