import { useState } from 'react';
import { getUserHobby } from '@api/hobby';

const useUserHobby = () => {
  const [userId, setUserId] = useState<number>();
  const [userHobby, setUserHobby] = useState<string | null>();
  const [userHobbyError, setUserHobbyError] = useState<string | null>();

  const fetchUserHobby = async (id: number) => {
    try {
      const hobby = await getUserHobby(id);
      setUserHobby(hobby);
      setUserId(id);
      setUserHobbyError(null);
    } catch (error: any) {
      setUserHobbyError(error.message);
      setUserHobby(null);
    }
  };

  return {
    userId,
    userHobby,
    userHobbyError,
    fetchUserHobby,
    setUserId: (id: number) => setUserId(id),
  };
};

export default useUserHobby;
