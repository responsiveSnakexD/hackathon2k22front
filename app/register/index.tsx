import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ControlledInput from '@app/components/ControlledInput';
import SendButton from '@app/components/buttons/SendButton';
import {useAppTheme} from '@app/hooks';
import useMachines from '@app/hooks/useMachines';
import {register} from '@app/stores/Auth/utils';
import {PageProps} from '@app/types/pageprops';
import {useSelector} from '@xstate/react';
import {Link} from 'expo-router';
import {useForm} from 'react-hook-form';
import {SafeAreaView} from 'react-native-safe-area-context';

import {RegisterFieldValues} from './types';

const Register: React.FC<PageProps> = ({navigation}) => {
  const {auth} = useMachines();
  const {colors} = useAppTheme();
  const [error, setError] = useState<string | null>(null);
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
        setError('incorrect data');
      }
    }
  };

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
        <ControlledInput
          password
          label="repeat password"
          control={control}
          name="repeatPassword"
          validate={(value) => {
            return value === getValues().password
              ? undefined
              : 'passwords are not the same';
          }}
        />
        {error && <Text style={{color: colors.error}}>{error}</Text>}
        <SendButton onPress={handleSubmit(onValidData)} disabled={loading}>
          zarejestruj
        </SendButton>
      </View>
      <View style={[styles.loginContainer, {borderColor: colors.onBackground}]}>
        <Link href="/login">
          <Text style={[styles.login, {color: colors.onBackground}]}>
            Log In
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
  loginContainer: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    borderRadius: 20,
  },
  login: {
    fontSize: 18,
  },
});

export default Register;
