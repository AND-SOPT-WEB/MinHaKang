import { deepFreeze } from '../util/deepFreeze';

export const MENU_ITEMS = Object.freeze({
  GAME: '게임',
  RANKING: '랭킹',
});

export const GAME_LEVEL = deepFreeze({
  LEVEL_1: {
    LEVEL: 1,
    START_NUM: 1,
    END_NUM: 18,
    GRID_SIZE: 3,
  },
  LEVEL_2: {
    LEVEL: 2,
    START_NUM: 1,
    END_NUM: 32,
    GRID_SIZE: 4,
  },
  LEVEL_3: {
    LEVEL: 3,
    START_NUM: 1,
    END_NUM: 50,
    GRID_SIZE: 5,
  },
});
