import { useState } from 'react';
import Header from '@components/Header';
import GameBoard from '@components/GameBoard';
import RangkingBoard from '@components/RangkingBoard';
import RecordModal from '@components/RecordModal';
import useGameBoard from '@hooks/useGameBoard.js';
import useTimer from '@hooks/useTimer.js';
import { GAME_LEVEL, MENU_ITEMS } from '@constant/constant.js';
import { addRecord } from '@utils/recordStorage.js';

const Home = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [activeMenu, setActiveMenu] = useState(MENU_ITEMS.GAME);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gameRecord, setGameRecord] = useState(null);

  const { duration, resetDuration } = useTimer(isGameStarted);

  const initializeGame = () => {
    setIsGameStarted(false);
    resetDuration();
    initializeBoard();
  };

  const onGameStart = () => {
    setIsGameStarted(true);
  };

  const onGameEnd = () => {
    const endTime = new Date().toISOString();
    const levelInfo = level;
    const playTime = duration;

    const newRecord = {
      endTime,
      level: levelInfo,
      playTime,
    };

    addRecord(newRecord);
    setGameRecord(newRecord);
    setIsModalOpen(true);
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
    flashButtons,
    clickedButtons,
  } = useGameBoard(onGameStart, onGameEnd);

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
          flashButtons={flashButtons}
          clickedButtons={clickedButtons}
        />
      ) : (
        <RangkingBoard />
      )}

      <RecordModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        record={gameRecord}
      />
    </>
  );
};

export default Home;
