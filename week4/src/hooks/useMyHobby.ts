import { useState, useEffect } from 'react';
import { getMyHobby } from '@api/hobby';

const useMyHobby = () => {
  const [myHobby, setMyHobby] = useState<string>('');

  const fetchMyHobby = async () => {
    try {
      const hobby = await getMyHobby();
      setMyHobby(hobby);
    } catch (error) {
      alert((error as Error).message);
    }
  };

  useEffect(() => {
    fetchMyHobby();
  }, []);

  return { myHobby };
};

export default useMyHobby;
