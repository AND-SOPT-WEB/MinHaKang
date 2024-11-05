// 전체 체크박스를 선택하는 함수
export const selectAllCheckboxes = (selectAllCheckbox, checkedMembers) => {
  checkedMembers.forEach((checkbox) => {
    checkbox.checked = selectAllCheckbox.checked;
  });
};

// 전체 체크박스 상태를 관리하는 함수
export const updateSelectAllCheckbox = (selectAllCheckbox, checkedMembers) => {
  const allChecked = Array.from(checkedMembers).every(
    (checkbox) => checkbox.checked
  );

  selectAllCheckbox.checked = allChecked ? true : false;
};
