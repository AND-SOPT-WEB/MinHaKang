import { renderMembers } from './modules/renderMembers.js';

const membersData = JSON.parse(localStorage.getItem('membersData'));
renderMembers(membersData);
