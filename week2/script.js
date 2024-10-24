import { members } from './data/members.js';
import { renderMembers } from './modules/renderMembers.js';
import { filterMembers, resetFilters } from './modules/filterMembers.js';
import {
  selectAllCheckboxes,
  handleCheckboxClick,
} from './modules/selectMembers.js';
import { deleteMembers } from './modules/deleteMember.js';

let membersData = JSON.parse(localStorage.getItem('membersData'));

if (!localStorage.getItem('membersData')) {
  localStorage.setItem('membersData', JSON.stringify(members));
} else {
  renderMembers(membersData);
}

// 필터 버튼 클릭 이벤트
document.querySelector('.filter_search').addEventListener('click', () => {
  const filter = {
    name: document.getElementById('name').value,
    englishName: document.getElementById('englishName').value,
    github: document.getElementById('github').value,
    gender: document.getElementById('gender').value,
    role: document.getElementById('role').value,
    firstWeekGroup: Number(document.getElementById('firstWeekGroup').value),
    secondWeekGroup: Number(document.getElementById('secondWeekGroup').value),
  };

  const filteredMembers = filterMembers(membersData, filter);
  renderMembers(filteredMembers);
});

// 초기화 버튼 클릭 이벤트
document.querySelector('.filter_reset').addEventListener('click', resetFilters);

// 체크박스 기능
const selectAllCheckbox = document.querySelector('#selectAll');
const checkedMembers = document.querySelectorAll(
  'tbody input[type="checkbox"]'
);

selectAllCheckboxes(selectAllCheckbox, checkedMembers);
handleCheckboxClick(selectAllCheckbox, checkedMembers);

// 선택삭제 버튼 클릭 이벤트
document.querySelector('.table_button_cancel').addEventListener('click', () => {
  const updatedMembers = deleteMembers(membersData, checkedMembers);
  localStorage.setItem('membersData', JSON.stringify(updatedMembers));

  renderMembers(updatedMembers);
});
