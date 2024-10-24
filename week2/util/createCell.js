// 테이블 셀(td)을 생성하는 함수
export const createCell = (data) => {
  const cell = document.createElement('td');

  if (data.type === 'checkbox') {
    cell.appendChild(data);
  }

  if (data.github) {
    const githubLink = document.createElement('a');
    githubLink.href = `https://github.com/${data.github}`;
    githubLink.target = '_blank';
    githubLink.textContent = data.github;
    cell.appendChild(githubLink);
  }

  if (typeof data === 'string' || typeof data === 'number') {
    cell.textContent = data;
  }

  return cell;
};
