import styled from '@emotion/styled';
import { useState } from 'react';
import { GAME_LEVEL, MENU_ITEMS } from '../constants/constant';

const Header = () => {
  const [activeItem, setActiveItem] = useState(MENU_ITEMS.GAME);

  const handleMenuClick = (item) => {
    setActiveItem(item);
  };

  return (
    <HeaderContainer>
      <div>
        <h1>1 to 50</h1>
        <nav>
          <ul>
            <ListItem
              onClick={() => handleMenuClick(MENU_ITEMS.GAME)}
              isActive={activeItem === MENU_ITEMS.GAME}
            >
              {MENU_ITEMS.GAME}
            </ListItem>
            <ListItem
              onClick={() => handleMenuClick(MENU_ITEMS.RANKING)}
              isActive={activeItem === MENU_ITEMS.RANKING}
            >
              {MENU_ITEMS.RANKING}
            </ListItem>
          </ul>
        </nav>
      </div>

      <div>
        <select onChange={(e) => setLevel(Number(e.target.value))}>
          <option value={GAME_LEVEL.LEVEL_1.LEVEL}>
            Level {GAME_LEVEL.LEVEL_1.LEVEL}
          </option>
          <option value={GAME_LEVEL.LEVEL_2.LEVEL}>
            Level {GAME_LEVEL.LEVEL_2.LEVEL}
          </option>
          <option value={GAME_LEVEL.LEVEL_3.LEVEL}>
            Level {GAME_LEVEL.LEVEL_3.LEVEL}
          </option>
        </select>

        {/* 타이머 */}
        <div>0</div>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 10rem;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue01};

  & h1 {
    font-size: 3.6rem;
  }

  & div {
    display: flex;
    align-items: center;
    gap: 4rem;
    font-size: 1.6rem;
  }

  & ul {
    display: flex;
    gap: 2rem;
  }

  & select {
    padding: 1rem 3rem 1rem 1rem;
    font-size: 1.6rem;
    border-radius: 1rem;
  }
`;

const ListItem = styled.li`
  padding: 1rem 2rem;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 2.4rem;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.blue02 : 'transparent'};
  transition: background-color 0.3s ease;
`;

export default Header;
