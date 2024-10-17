const membersData = JSON.parse(localStorage.getItem("membersData"));
const tbody = document.querySelector("tbody");

function renderTable(data) {
  tbody.innerHTML = "";
  const rows = data.map((member) => {
    return `
      <tr>
        <td><input type="checkbox" /></td>
        <td>${member.name}</td>
        <td>${member.englishName}</td>
        <td>${member.github}</td>
        <td>${member.gender === "male" ? "남자" : "여자"}</td>
        <td>${member.role}</td>
        <td>${member.firstWeekGroup}</td>
        <td>${member.secondWeekGroup}</td>
      </tr>
    `;
  });
  tbody.innerHTML = rows.join("");
}

renderTable(membersData);
