// 테이블 셀(td)을 생성하는 함수
export const createCell = (content) => {
  const cell = document.createElement('td');
  if (content.type === 'checkbox') {
    cell.appendChild(content);
  } else {
    cell.textContent = content;
  }
  return cell;
};
