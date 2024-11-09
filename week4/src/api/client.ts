import { BASE_URL } from '@constants/api';
import axios from 'axios';

export const client = axios.create({
  baseURL: BASE_URL,
});
