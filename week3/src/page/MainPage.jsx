import { useEffect, useState } from 'react';
import Header from '@components/Header';
import GameBoard from '@components/GameBoard';
import RangkingBoard from '@/components/RangkingBoard';
import useGameBoard from '@/hook/useGameBoard.js';
import { GAME_LEVEL, MENU_ITEMS } from '@/constant/constant.js';

const MainPage = () => {
  const [duration, setDuration] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [activeMenu, setActiveMenu] = useState(MENU_ITEMS.GAME);

  const initializeGame = () => {
    setIsGameStarted(false);
    setDuration(0);
    initializeBoard();
  };

  const onGameStart = () => {
    setIsGameStarted(true);
  };

  const onGameEnd = () => {
    const endTime = new Date().toISOString();
    const levelInfo = level;
    const playTime = duration;
    const records = JSON.parse(localStorage.getItem('gameRecords')) || [];

    records.push({
      endTime,
      level: levelInfo,
      playTime,
    });

    localStorage.setItem('gameRecords', JSON.stringify(records));

    alert(`게임 끝! 기록: ${duration}초`);
    initializeGame();
  };

  const handleMenuChange = (menu) => {
    setActiveMenu(menu);
    initializeGame();
  };

  const {
    level,
    numbers,
    nextNumber,
    hiddenButtons,
    handleLevel,
    handleBoardClick,
    initializeBoard,
  } = useGameBoard(onGameStart, onGameEnd);

  useEffect(() => {
    let timer;

    if (isGameStarted) {
      const intervalStartTime = Date.now();
      timer = setInterval(() => {
        const currentTime = Date.now();
        const elapsedTime = (currentTime - intervalStartTime) / 1000;
        setDuration(elapsedTime.toFixed(2));
      }, 10);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isGameStarted]);

  return (
    <>
      <Header
        duration={duration}
        level={level}
        handleLevel={handleLevel}
        activeMenu={activeMenu}
        handleMenuChange={handleMenuChange}
      />
      {activeMenu === MENU_ITEMS.GAME ? (
        <GameBoard
          numbers={numbers}
          nextNumber={nextNumber}
          hiddenButtons={hiddenButtons}
          gridSize={GAME_LEVEL[`LEVEL_${level}`].GRID_SIZE}
          handleBoardClick={handleBoardClick}
        />
      ) : (
        <RangkingBoard />
      )}
    </>
  );
};

export default MainPage;
