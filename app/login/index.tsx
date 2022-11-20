import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';

import API from '@app/api';
import ControlledInput from '@app/components/ControlledInput';
import SendButton from '@app/components/buttons/SendButton';
import {useAppTheme} from '@app/hooks';
import useMachines from '@app/hooks/useMachines';
import {login} from '@app/stores/Auth/utils';
import {PageProps} from '@app/types/pageprops';
import {useSelector} from '@xstate/react';
import {Link} from 'expo-router';
import {useForm} from 'react-hook-form';
import {SafeAreaView} from 'react-native-safe-area-context';

import {LoginFieldValues} from './types';

const Login: React.FC<PageProps> = ({navigation}) => {
  const {auth} = useMachines();
  const {colors} = useAppTheme();
  const [error, setError] = useState<string | null>(null);
  const loading = useSelector(auth, (state) => state.matches('loading'));
  const {control, handleSubmit} = useForm<LoginFieldValues>({
    defaultValues: {email: '', password: ''},
  });

  const onValidData = async ({
    email,
    password,
  }: LoginFieldValues): Promise<void> => {
    auth.send('LOGIN');
    const authenticated = await login(email, password);
    if (authenticated) {
      auth.send('LOGGED');
      navigation.navigate('index');
    } else {
      auth.send('LOGOUT');
      setError('złe dane!');
    }
  };

  useEffect(() => {
    const checkAuthentication = async (): Promise<void> => {
      try {
        API.getToken();
      } catch {
        navigation.navigate('index');
      }
    };
    checkAuthentication();
  }, [navigation]);

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.formContainer}>
        <ControlledInput label="email" control={control} name="email" />
        <ControlledInput
          label="password"
          control={control}
          name="password"
          password
        />
        {error && <Text style={{color: colors.error}}>{error}</Text>}
        <SendButton onPress={handleSubmit(onValidData)} disabled={loading}>
          <Text style={{color: colors.onSecondary}}>Log In</Text>
        </SendButton>
      </View>
      <View
        style={[styles.registerContainer, {borderColor: colors.onBackground}]}>
        <Link href="/register">
          <Text style={[styles.register, {color: colors.onBackground}]}>
            Register
          </Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  registerContainer: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    borderRadius: 20,
  },
  register: {
    fontSize: 18,
  },
});

export default Login;
