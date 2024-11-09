import { client } from './client';
import { END_POINT } from '@constants/api';
import { User } from '@type/user';

export const postSignUp = async (data: User) => {
  try {
    const response = await client.post(END_POINT.USER, data);
    return response.data.result;
  } catch (error) {
    throw new Error('회원가입에 실패했습니다.');
  }
};
