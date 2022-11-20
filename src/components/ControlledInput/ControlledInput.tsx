import React, {ReactElement} from 'react';
import {View, Text} from 'react-native';

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

  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        onChangeText={onChange}
        value={value}
        secureTextEntry={password}
      />
      {error ? <Text>{error.message}</Text> : null}
    </View>
  );
};

export default ControlledInput;
