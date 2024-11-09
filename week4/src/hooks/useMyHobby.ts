import { useState, useEffect } from 'react';
import { getMyHobby } from '@api/hobby';

const useMyHobby = () => {
  const [myHobby, setMyHobby] = useState<string>('');
  const [myHobbyError, setMyHobbyError] = useState<string | null>(null);

  const fetchMyHobby = async () => {
    try {
      const hobby = await getMyHobby();
      setMyHobby(hobby);
      setMyHobbyError(null);
    } catch (error: any) {
      setMyHobbyError('나의 취미 조회에 실패했습니다.');
    }
  };

  useEffect(() => {
    fetchMyHobby();
  }, []);

  return { myHobby, myHobbyError };
};

export default useMyHobby;
