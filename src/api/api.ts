import {API_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AxiosRequestConfig, AxiosResponse} from 'axios';

import axiosClient from './client';
import {
  AuthResponse,
  CampaignPreview,
  TaskData,
  TaskPreview,
  TaskPreviewDict,
} from './types';

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

  static async getCurrentCampaign(): Promise<AxiosResponse<CampaignPreview>> {
    const url = 'task/campaign';
    const method = 'POST';

    return API.request({url, method});
  }

  static async getTask(
    id: string,
    camapignId: number,
  ): Promise<AxiosResponse<TaskData>> {
    const token = await API.getToken();
    const url = `task/${id}/${camapignId}`;
    const method = 'POST';
    const headers = {
      Authorization: token,
    };

    return API.request({url, method, headers});
  }

  static async getAllTasks(campaignId: number): Promise<Array<TaskPreview>> {
    const token = await API.getToken();
    const url = `task/all/${campaignId}`;
    const method = 'POST';
    const headers = {
      Authorization: token,
    };

    console.log(url, campaignId);
    const {data} = (await API.request({
      url,
      method,
      headers,
    })) as AxiosResponse<TaskPreviewDict>;

    return Object.entries(data).map(([task_id, rest]) => ({task_id, ...rest}));
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
