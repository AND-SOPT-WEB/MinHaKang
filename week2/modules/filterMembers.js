export const filterMembers = (members, filter) => {
  return members.filter((data) => {
    return Object.keys(filter).every((key) => {
      if (!filter[key]) return true;

      if (key === 'gender') {
        return data[key] === filter[key];
      }

      if (typeof data[key] === 'string') {
        return data[key].toLowerCase().includes(filter[key].toLowerCase());
      } else if (typeof data[key] === 'number') {
        return data[key] === filter[key];
      }
    });
  });
};

export const resetFilters = () => {
  const filterFields = [
    'name',
    'englishName',
    'github',
    'gender',
    'role',
    'firstWeekGroup',
    'secondWeekGroup',
  ];

  filterFields.forEach((field) => {
    const element = document.getElementById(field);
    element.value = '';
  });
};
