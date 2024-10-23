import { createCell } from '../util/createCell.js';

const tbody = document.querySelector('tbody');

export const renderMembers = (data) => {
  tbody.innerHTML = '';

  data.map((member) => {
    const row = document.createElement('tr');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    row.appendChild(createCell(checkbox));
    row.appendChild(createCell(member.name));
    row.appendChild(createCell(member.englishName));
    row.appendChild(createCell(member.github));
    row.appendChild(createCell(member.gender === 'male' ? '남자' : '여자'));
    row.appendChild(createCell(member.role));
    row.appendChild(createCell(member.firstWeekGroup));
    row.appendChild(createCell(member.secondWeekGroup));

    tbody.appendChild(row);
  });
};
