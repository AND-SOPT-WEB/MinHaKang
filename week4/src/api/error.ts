import { ERROR_MESSAGE } from '@constants/messages';
import axios, { AxiosError, AxiosResponse } from 'axios';

export const onErrorResponse = (error: AxiosError) => {
  if (axios.isAxiosError(error)) {
    const response = error.response as AxiosResponse;
    const code = response.data.code;
    let errorMessage;

    // http 상태 코드에 따른 에러 메시지 처리
    switch (response.status) {
      case 400:
        errorMessage = ERROR_MESSAGE.INVALID_REQUEST;
        break;
      case 401:
        errorMessage = ERROR_MESSAGE.NO_TOKEN;
        break;
      case 403:
        errorMessage =
          code === '00'
            ? ERROR_MESSAGE.INVALID_TOKEN
            : ERROR_MESSAGE.INVALID_PASSWORD;
        break;
      case 404:
        errorMessage =
          code === '00' ? ERROR_MESSAGE.INVALID_PATH : ERROR_MESSAGE.INVALID_NO;
        break;
      case 409:
        errorMessage = ERROR_MESSAGE.DUPLICATED_USERNAME;
        break;
      default:
        errorMessage = ERROR_MESSAGE.DEFAULT;
    }

    return Promise.reject(new Error(errorMessage));
  }

  return Promise.reject(new Error(ERROR_MESSAGE.DEFAULT));
};
