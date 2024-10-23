import { renderMembers } from './modules/renderMembers.js';
import { filterMembers } from './modules/filterMembers.js';

const membersData = JSON.parse(localStorage.getItem('membersData'));
renderMembers(membersData);

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

  // 필터링된 회원 목록 가져오기
  const filteredMembers = filterMembers(membersData, filter);
  renderMembers(filteredMembers);
});
