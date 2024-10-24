export const deleteMembers = (members, checkedMembers) => {
  return members.filter((_, index) => !checkedMembers[index].checked);
};
