import React from 'react';
import {View, Text, Pressable} from 'react-native';

import useMachines from '@app/hooks/useMachines';
import {useSelector} from '@xstate/react';
import {Link} from 'expo-router';

const Login: React.FC = () => {
  const {auth} = useMachines();
  const logged = useSelector(auth, (state) => state.matches('authenticated'));

  const handleAuth = (): void => {
    auth.send(logged ? 'LOGOUT' : 'LOGIN');
  };

  return (
    <View>
      <Text>zalogowany albo nie</Text>
      <Link href="/">Go to home</Link>
      <Pressable onPress={handleAuth}>
        <Text>{logged ? 'wyloguj' : 'zaloguj'}</Text>
      </Pressable>
    </View>
  );
};

export default Login;
