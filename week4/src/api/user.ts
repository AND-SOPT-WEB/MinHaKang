import { client } from './client';
import { ACCESS_TOKEN_KEY, END_POINT } from '@constants/api';
import { LoginData, User, UserInfoData } from '@type/user';

export const postLogin = async (data: LoginData) => {
  try {
    const response = await client.post(END_POINT.LOGIN, data);

    return response.data.result.token;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const postSignUp = async (data: User) => {
  try {
    const response = await client.post(END_POINT.USER, data);
    return response.data.result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const putUserInfo = async (data: UserInfoData) => {
  try {
    const token = sessionStorage.getItem(ACCESS_TOKEN_KEY);
    const response = await client.put(END_POINT.USER, data, {
      headers: {
        token: token,
      },
    });

    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
