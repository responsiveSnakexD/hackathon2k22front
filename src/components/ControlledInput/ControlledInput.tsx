import React, {ReactElement} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {useAppTheme} from '@app/hooks';
import {useController, FieldValues} from 'react-hook-form';
import {TextInput} from 'react-native-paper';

import {ControlledInputProps} from './types';

const ControlledInput = <T extends FieldValues>({
  label,
  name,
  control,
  validate,
  password,
}: ControlledInputProps<T>): ReactElement => {
  const {
    field: {onChange, value},
    fieldState: {error},
  } = useController({control, name, rules: {validate}});
  const {colors} = useAppTheme();

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.inputLabel, {color: colors.text}]}>
        {label.toLocaleUpperCase()}
      </Text>
      <TextInput
        onChangeText={onChange}
        value={value}
        secureTextEntry={password}
        style={[styles.input, {backgroundColor: colors.surface}]}
      />
      {error ? (
        <Text style={{color: colors.error}}>{error.message}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 15,
    width: '90%',
  },
  input: {
    height: 50,
    borderRadius: 10,
  },
  inputLabel: {
    marginBottom: 5,
  },
});

export default ControlledInput;
