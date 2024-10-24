import { members } from './data/members.js';
import { renderMembers } from './modules/renderMembers.js';
import { filterMembers, resetFilters } from './modules/filterMembers.js';
import {
  selectAllCheckboxes,
  handleCheckboxClick,
} from './modules/selectMembers.js';
import { deleteMembers } from './modules/deleteMember.js';
import { addMember } from './modules/addMember.js';
import { isFormValid } from './utils/validation.js';

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

// 모달창 관련 기능
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal_close');
const addMemberForm = document.querySelector('.addMemberForm');
const toggleModal = () => (modal.open ? modal.close() : modal.showModal());

// 모달창 열기 및 닫기 이벤트
document
  .querySelector('.table_button_add')
  .addEventListener('click', toggleModal);
modalClose.addEventListener('click', toggleModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) toggleModal();
});
modal.addEventListener('close', () => {
  addMemberForm.reset();
});

// 멤버 추가 이벤트
addMemberForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newMember = {
    name: document.getElementById('newName').value,
    englishName: document.getElementById('newEnglishName').value,
    github: document.getElementById('newGithub').value,
    gender: document.getElementById('newGender').value,
    role: document.getElementById('newRole').value,
    firstWeekGroup: document.getElementById('newFirstWeekGroup').value
      ? Number(document.getElementById('newFirstWeekGroup').value)
      : null,
    secondWeekGroup: document.getElementById('newSecondWeekGroup').value
      ? Number(document.getElementById('newSecondWeekGroup').value)
      : null,
  };

  if (!isFormValid(newMember)) return;

  membersData = addMember(newMember, membersData);
  localStorage.setItem('membersData', JSON.stringify(membersData));

  renderMembers(membersData);
  modal.close();
});
