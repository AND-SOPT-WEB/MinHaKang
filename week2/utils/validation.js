// 모달폼의 입력값 검증
export const isFormValid = (member) => {
  const {
    name,
    englishName,
    github,
    gender,
    role,
    firstWeekGroup,
    secondWeekGroup,
  } = member;

  if (
    !name ||
    !englishName ||
    !github ||
    !gender ||
    !role ||
    firstWeekGroup === null ||
    secondWeekGroup === null
  ) {
    alert('모든 값을 입력해주세요.');
    return false;
  }
  return true;
};
