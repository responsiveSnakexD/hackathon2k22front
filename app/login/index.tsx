import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';

import ControlledInput from '@app/components/ControlledInput';
import useMachines from '@app/hooks/useMachines';
import {login} from '@app/stores/Auth/utils';
import {PageProps} from '@app/types/pageprops';
import {useSelector} from '@xstate/react';
import {Link} from 'expo-router';
import {useForm} from 'react-hook-form';

import {LoginFieldValues} from './types';

const Login: React.FC<PageProps> = ({navigation}) => {
  const {auth} = useMachines();
  const [error, setError] = useState<string | null>(null);
  const loading = useSelector(auth, (state) => state.matches('loading'));
  const {control, handleSubmit} = useForm<LoginFieldValues>({
    defaultValues: {email: '', password: ''},
  });

  const onValidData = async ({
    email,
    password,
  }: LoginFieldValues): Promise<void> => {
    if (!loading) {
      auth.send('LOGIN');
      const authenticated = await login(email, password);
      if (authenticated) {
        auth.send('LOGGED');
        navigation.navigate('index');
      } else {
        auth.send('LOGOUT');
        setError('złe dane!');
      }
    }
  };

  return (
    <View>
      <Text>zalogowany albo nie</Text>
      <Link href="/">Go to home</Link>
      <ControlledInput label="email" control={control} name="email" />
      <ControlledInput
        label="password"
        control={control}
        name="password"
        password
      />
      {error && <Text>{error}</Text>}
      <Pressable onPress={handleSubmit(onValidData)}>
        <Text>zaloguj</Text>
      </Pressable>
      <Link href="/register">Zarejestruj się!</Link>
    </View>
  );
};

export default Login;
