import { client } from './client';
import { END_POINT } from '@constants/api';
import { LoginData, User } from '@type/user';

export const postLogin = async (data: LoginData) => {
  try {
    const response = await client.post(END_POINT.LOGIN, data);

    return response.data.result.token;
  } catch (error) {
    throw new Error('로그인에 실패했습니다.');
  }
};

export const postSignUp = async (data: User) => {
  try {
    const response = await client.post(END_POINT.USER, data);
    return response.data.result;
  } catch (error) {
    throw new Error('회원가입에 실패했습니다.');
  }
};
