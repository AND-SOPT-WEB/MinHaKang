// 모달폼의 입력값 검증
export const isFormValid = (member) => {
  const isValid = Object.values(member).every(
    (value) => value !== null && value !== ''
  );
  if (!isValid) {
    alert('모든 값을 입력해주세요.');
  }
  return isValid;
};
