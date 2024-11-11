import { useState } from 'react';
import * as styles from './SearchHobby.css';
import Button from '@components/button/Button';
import Input from '@components/input/Input';
import useMyHobby from '@hooks/useMyHobby';
import useUserHobby from '@hooks/useUserHobby';

const SearchHobby = () => {
  const { myHobby } = useMyHobby();
  const { userId, userHobby, fetchUserHobby } = useUserHobby();

  const [tempUserId, setTempUserId] = useState<number | null>(null);

  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempUserId(Number(e.target.value));
  };

  const handleSearch = () => {
    if (tempUserId !== null) {
      fetchUserHobby(tempUserId);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.title}>나의 취미</h3>
        {myHobby && <p>{myHobby}</p>}
      </div>

      <div>
        <h3 className={styles.title}>다른 사람들의 취미</h3>
        <Input
          type='number'
          placeholder='사용자 번호'
          onChange={handleUserIdChange}
        />
      </div>

      {userHobby && (
        <p>
          {userId}번님의 취미: {userHobby}
        </p>
      )}

      <Button onClick={handleSearch}>검색</Button>
    </div>
  );
};

export default SearchHobby;
