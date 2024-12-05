import { useState, useRef, useEffect } from 'react';
import { GAME_LEVEL } from '@constant/constant.js';

const useGameBoard = (onGameStart, onGameEnd) => {
  const [level, setLevel] = useState(GAME_LEVEL.LEVEL_1.LEVEL);
  const { START_NUM, END_NUM } = GAME_LEVEL[`LEVEL_${level}`];
  const [numbers, setNumbers] = useState([]);
  const [nextNumber, setNextNumber] = useState(START_NUM);
  const [hiddenButtons, setHiddenButtons] = useState([]);
  const [clickedButtons, setClickedButtons] = useState([]);
  const [flashButtons, setFlashButtons] = useState([]);
  const remainingNumbersRef = useRef([]);

  // 레벨이 변경될 때마다 게임판 초기화
  useEffect(() => {
    initializeBoard();
  }, [level]);

  const initializeBoard = () => {
    setNumbers(shuffleNumbers(START_NUM, END_NUM / 2));
    setHiddenButtons([]);
    setClickedButtons([]);
    setNextNumber(START_NUM);
    remainingNumbersRef.current = shuffleNumbers(END_NUM / 2 + 1, END_NUM);
  };

  const shuffleNumbers = (start, end) => {
    return Array.from(
      { length: end - start + 1 },
      (_, index) => start + index
    ).sort(() => Math.random() - 0.5);
  };

  const handleBoardClick = (number, index) => {
    if (number === START_NUM) {
      onGameStart();
    }

    // 클릭한 숫자가 다음에 클릭해야할 숫자와 같은지 확인
    if (number === nextNumber) {
      setClickedButtons((prev) => [...prev, index]);
      setFlashButtons((prev) => [...prev, index]);

      if (number === END_NUM) {
        onGameEnd();
      } else {
        const nextRandomNumber = remainingNumbersRef.current.shift();
        updateNumbers(index, nextRandomNumber);
        setNextNumber((prev) => prev + 1);
      }
    }

    // 게임이 끝난후 flash 초기화
    setTimeout(() => {
      setFlashButtons((prev) => prev.filter((i) => i !== index));
    }, 500);
  };

  const updateNumbers = (index, nextRandomNumber) => {
    setNumbers((prevNumbers) => {
      const updatedNumbers = [...prevNumbers];
      updatedNumbers[index] = nextRandomNumber;
      return updatedNumbers;
    });
    if (nextRandomNumber === undefined) {
      setHiddenButtons((prev) => [...prev, index]);
    }
  };

  const handleLevel = (newLevel) => {
    setLevel(newLevel);
  };

  return {
    level,
    numbers,
    nextNumber,
    hiddenButtons,
    clickedButtons,
    flashButtons,
    initializeBoard,
    handleLevel,
    handleBoardClick,
  };
};

export default useGameBoard;
