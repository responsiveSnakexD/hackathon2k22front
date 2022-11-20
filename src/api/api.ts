import {API_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AxiosRequestConfig, AxiosResponse} from 'axios';

import axiosClient from './client';
import {AuthResponse} from './types';

export default class API {
  static async login(
    email: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    const url = 'auth/signin';
    const method = 'POST';
    const data = {email, password};

    return API.request({url, method, data});
  }

  static async register(
    email: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    const url = 'auth/signup';
    const method = 'POST';
    const data = {email, password};

    return API.request({url, method, data});
  }

  static async getToken(): Promise<string> {
    const token = await AsyncStorage.getItem('token');

    if (!token) throw new Error('User not authenticated');

    return token;
  }

  static async request<T>({
    url,
    method,
    params,
    data,
    headers,
  }: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return axiosClient.request({
      method,
      url: `${API_URL}${url}`,
      params,
      data,
      headers,
    });
  }
}
