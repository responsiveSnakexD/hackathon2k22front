import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';

import ControlledInput from '@app/components/ControlledInput';
import useMachines from '@app/hooks/useMachines';
import {register} from '@app/stores/Auth/utils';
import {PageProps} from '@app/types/pageprops';
import {useSelector} from '@xstate/react';
import {Link} from 'expo-router';
import {useForm} from 'react-hook-form';

import {RegisterFieldValues} from './types';

const Register: React.FC<PageProps> = ({navigation}) => {
  const {auth} = useMachines();
  const [error, setError] = useState('');
  const loading = useSelector(auth, (state) => state.matches('loading'));
  const {control, handleSubmit, getValues} = useForm<RegisterFieldValues>({
    defaultValues: {email: '', password: '', repeatPassword: ''},
  });

  const onValidData = async ({
    email,
    password,
  }: RegisterFieldValues): Promise<void> => {
    if (!loading) {
      auth.send('LOGIN');
      const authenticated = await register(email, password);
      if (authenticated) {
        auth.send('LOGGED');
        navigation.navigate('/');
      } else {
        auth.send('LOGOUT');
        setError('złe dane!');
      }
    }
  };

  return (
    <View>
      <Link href="/">Go to home</Link>
      <ControlledInput label="email" control={control} name="email" />
      <ControlledInput
        label="password"
        control={control}
        name="password"
        password
      />
      <ControlledInput
        password
        label="repeatPassword"
        control={control}
        name="repeatPassword"
        validate={(value) => {
          return value === getValues().password
            ? undefined
            : 'hasła nie są identyczne';
        }}
      />
      {error ? <Text>{error}</Text> : null}
      <Pressable onPress={handleSubmit(onValidData)}>
        <Text>zarejestruj</Text>
      </Pressable>
      <Link href="/login">Zaloguj się!</Link>
    </View>
  );
};

export default Register;
