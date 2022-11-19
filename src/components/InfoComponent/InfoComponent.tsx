import React, {FC, useState} from 'react';
import {Modal, StyleSheet, Pressable, View, ScrollView} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import {Text, Title} from 'react-native-paper';
import globalStyles from '@app/globalStyles';
import {useAppTheme} from '../../hooks';
import {InfoComponentProps} from './type';

export const InfoComponent: FC<InfoComponentProps> = ({
  campaignDescription,
  campaignName,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {colors} = useAppTheme();

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible((state) => !state)}>
        <View style={styles.centeredView}>
          <View style={[styles.modalView, {backgroundColor: colors.primary}]}>
            <Pressable
              style={[globalStyles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}>
              <Entypo name="cross" size={24} color={colors.onPrimary} />
            </Pressable>
            <View style={styles.modalText}>
              <Title style={[styles.title, {color: colors.onPrimary}]}>
                {campaignName}
              </Title>
              <ScrollView>
                <Text style={(styles.description, [{color: colors.onPrimary}])}>
                  {campaignDescription}
                </Text>
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[globalStyles.button, {backgroundColor: colors.accent}]}
        onPress={() => setModalVisible(true)}>
        <Entypo name="info" size={24} color="white" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '90%',
    height: '70%',
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    elevation: 0,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
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
