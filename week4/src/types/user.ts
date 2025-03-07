export interface User {
  username: string;
  password: string;
  hobby: string;
}

export interface SignupData extends User {
  passwordConfirm: string;
}

export type LoginData = Pick<User, 'username' | 'password'>;

export type UserInfoData = Omit<User, 'username'>;
