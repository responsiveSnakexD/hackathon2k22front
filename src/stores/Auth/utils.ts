import API from '@app/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = async (
  email: string,
  password: string,
): Promise<boolean> => {
  try {
    const {data} = await API.login(email, password);
    await AsyncStorage.setItem('token', data.token);
    return true;
  } catch (e) {
    return false;
  }
};

export const register = async (
  email: string,
  password: string,
): Promise<boolean> => {
  try {
    const {data} = await API.register(email, password);
    await AsyncStorage.setItem('token', data.token);
    return true;
  } catch (e) {
    return false;
  }
};
