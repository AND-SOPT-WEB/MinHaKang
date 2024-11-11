export const ERROR_MESSAGE = {
  DEFAULT: '요청에 실패했어요.',
  INVALID_REQUEST: '요청 데이터가 유효하지 않아요.',
  INVALID_USER_INFO: 'username, password 또는 hobby는 8자를 초과할 수 없어요.',
  INVALID_PASSWORD: '비밀번호를 확인해주세요.',
  NO_TOKEN: '로그인 정보가 만료되었어요. 다시 로그인해 주세요.',
  INVALID_TOKEN: '유효하지 않은 회원 정보에요.',
  INVALID_PATH: '유효하지 않은 경로에요.',
  INVALID_NO: '유효하지 않은 번호에요.',
  DUPLICATED_USERNAME: '이미 사용 중인 사용자 이름이에요.',
  UPDATE_INFO_REQUIRED: '변경할 정보를 입력해주세요.',
} as const;

export const SUCCESS_MESSAGE = {
  SIGNUP: (no: number) => `회원가입에 성공! 회원 번호: ${no}`,
  LOGIN: '로그인에 성공했어요.',
  LOGOUT: '로그아웃에 성공했어요.',
  UPDATE_PROFILE: '정보 변경에 성공했어요.',
};
