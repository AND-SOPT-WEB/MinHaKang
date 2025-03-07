import axios from 'axios';
import { BASE_URL } from '@constants/api';
import { onErrorResponse } from './error';

export const client = axios.create({
  baseURL: BASE_URL,
});

client.interceptors.response.use((response) => response, onErrorResponse);
