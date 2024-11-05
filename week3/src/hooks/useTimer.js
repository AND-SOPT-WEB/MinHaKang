import { useEffect, useState } from 'react';

const useTimer = (isGameStarted) => {
  const [duration, setDuration] = useState(0);

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

  // 타이머를 초기화하는 메서드
  const resetDuration = () => {
    setDuration(0);
  };

  return { duration, resetDuration };
};

export default useTimer;
