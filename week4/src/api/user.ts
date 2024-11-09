import { client } from './client';
import { ACCESS_TOKEN_KEY, END_POINT } from '@constants/api';
import { LoginData, User, UserInfoData } from '@type/user';

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
    throw new Error('회원 정보 수정에 실패했습니다.');
  }
};
