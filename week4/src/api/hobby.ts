import { ACCESS_TOKEN_KEY } from '@constants/config';
import { client } from './client';
import { END_POINT } from '@constants/api';

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
    if (error instanceof Error) {
      throw new Error(error.message);
    }
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
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
