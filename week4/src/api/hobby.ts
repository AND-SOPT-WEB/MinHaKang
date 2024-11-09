import { client } from './client';
import { ACCESS_TOKEN_KEY, END_POINT } from '@constants/api';

export const getMyHobby = async () => {
  try {
    const token = sessionStorage.getItem(ACCESS_TOKEN_KEY);
    const response = await client.get(END_POINT.MY_HOBBY, {
      headers: {
        token: token,
      },
    });
    return response.data.result.hobby;
  } catch (error) {
    throw new Error('취미 조회에 실패했습니다.');
  }
};

export const getUserHobby = async (userId: number) => {
  try {
    const token = sessionStorage.getItem(ACCESS_TOKEN_KEY);
    const response = await client.get(END_POINT.USER_HOBBY(userId), {
      headers: {
        token: token,
      },
    });
    return response.data.result.hobby;
  } catch (error) {
    throw new Error('다른 사람 취미 조회에 실패했습니다.');
  }
};
