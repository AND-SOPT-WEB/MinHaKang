const getRecords = () => {
  return JSON.parse(localStorage.getItem('gameRecords')) || [];
};

const addRecord = (newRecord) => {
  const records = getRecords();
  records.push(newRecord);
  localStorage.setItem('gameRecords', JSON.stringify(records));
};

const resetRecords = () => {
  localStorage.removeItem('gameRecords');
};

const sortRecords = (records) => {
  return records.sort((a, b) => {
    if (a.level === b.level) {
      return a.playTime - b.playTime;
    }
    return b.level - a.level;
  });
};

export { getRecords, addRecord, resetRecords, sortRecords };
