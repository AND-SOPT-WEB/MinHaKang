export const filterMembers = (members, filter) => {
  return members.filter((data) => {
    return Object.keys(filter).every((key) => {
      if (!filter[key]) return true;

      if (typeof data[key] === 'string') {
        return data[key].toLowerCase().includes(filter[key].toLowerCase());
      } else if (typeof data[key] === 'number') {
        return data[key] === filter[key];
      }
    });
  });
};
