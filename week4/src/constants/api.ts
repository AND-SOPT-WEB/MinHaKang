export const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

export const END_POINT = {
  USER: '/user',
  LOGIN: '/login',
  MY_HOBBY: '/user/my-hobby',
  USER_HOBBY: (no: number) => `/user/${no}/hobby`,
} as const;
