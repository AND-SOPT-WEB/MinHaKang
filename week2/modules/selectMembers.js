// 체크박스 전체 선택
export const selectAllCheckboxes = (selectAllCheckbox, checkedMembers) => {
  selectAllCheckbox.addEventListener('click', function () {
    checkedMembers.forEach((checkbox) => {
      checkbox.checked = this.checked;
    });
  });
};

// 체크박스 클릭 이벤트
export const handleCheckboxClick = (selectAllCheckbox, checkedMembers) => {
  checkedMembers.forEach((checkbox) => {
    checkbox.addEventListener('click', function () {
      if (!this.checked) {
        selectAllCheckbox.checked = false;
      } else {
        const allChecked = Array.from(checkedMembers).every(
          (key) => key.checked
        );
        selectAllCheckbox.checked = allChecked;
      }
    });
  });
};
