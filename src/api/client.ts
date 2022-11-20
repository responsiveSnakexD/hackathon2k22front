import {API_URL} from '@env';
import axios from 'axios';

const client = axios.create({
  baseURL: API_URL,
});

export default client;
