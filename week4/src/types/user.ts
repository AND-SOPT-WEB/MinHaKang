export interface User {
  username: string;
  password: string;
  hobby: string;
}

export type LoginData = Pick<User, 'username' | 'password'>;
