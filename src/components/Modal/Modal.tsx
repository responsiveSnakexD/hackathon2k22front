import globalStyles from '@app/globalStyles';
import {useAppTheme} from '@app/hooks';
import {Entypo} from '@expo/vector-icons';
import React from 'react';
import {View, Modal as NativeModal, StyleSheet, Pressable} from 'react-native';
import {ModalProps} from './type';

export const Modal: React.FC<ModalProps> = ({
  button,
  content,
  backgroundColor,
}) => {
  const [visible, setVisible] = React.useState(false);
  const {colors} = useAppTheme();
  return (
    <View style={styles.centeredView}>
      <NativeModal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible((state) => !state)}>
        <View style={styles.centeredView}>
          <View
            style={[
              styles.modalView,
              {backgroundColor: backgroundColor ?? colors.primary},
            ]}>
            <Pressable
              style={[globalStyles.button, styles.buttonClose]}
              onPress={() => setVisible(false)}>
              <Entypo name="cross" size={24} color={colors.onAccent} />
            </Pressable>
            <View style={styles.content}>{content}</View>
          </View>
        </View>
      </NativeModal>
      <Pressable style={globalStyles.button} onPress={() => setVisible(true)}>
        {button}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {},
  buttonClose: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  modalView: {
    width: '90%',
    height: '90%',
    margin: 20,
    padding: 35,
    borderRadius: 20,
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
});
