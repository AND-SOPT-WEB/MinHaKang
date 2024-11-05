import { useEffect, useState } from 'react';
import Header from '@components/Header';
import GameBoard from '@components/GameBoard';
import RangkingBoard from '@/components/RangkingBoard';
import RecordModal from '@components/RecordModal';
import useGameBoard from '@/hook/useGameBoard.js';
import { GAME_LEVEL, MENU_ITEMS } from '@/constant/constant.js';

const MainPage = () => {
  const [duration, setDuration] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [activeMenu, setActiveMenu] = useState(MENU_ITEMS.GAME);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gameRecord, setGameRecord] = useState(null);

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

    const newRecord = {
      endTime,
      level: levelInfo,
      playTime,
    };
    records.push(newRecord);

    localStorage.setItem('gameRecords', JSON.stringify(records));

    setGameRecord(newRecord);
    setIsModalOpen(true);
    initializeGame();
  };

  const handleMenuChange = (menu) => {
    setActiveMenu(menu);
    initializeGame();
  };

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
      {/* 헤더 */}
      <Header
        duration={duration}
        level={level}
        handleLevel={handleLevel}
        activeMenu={activeMenu}
        handleMenuChange={handleMenuChange}
      />
      {activeMenu === MENU_ITEMS.GAME ? (
        // 게임판
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
        // 랭킹보드
        <RangkingBoard />
      )}

      {/* 모달 */}
      <RecordModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        record={gameRecord}
      />
    </>
  );
};

export default MainPage;
