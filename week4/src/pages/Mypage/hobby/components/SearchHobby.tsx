import * as styles from './SearchHobby.css';
import Button from '@components/button/Button';
import Input from '@components/input/Input';
import useMyHobby from '@hooks/useMyHobby';

const SearchHobby = () => {
  const { myHobby, myHobbyError } = useMyHobby();

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.title}>나의 취미</h3>
        {myHobbyError ? <p>{myHobbyError}</p> : <p>{myHobby}</p>}
      </div>

      <div>
        <h3 className={styles.title}>다른 사람들의 취미</h3>
        <Input
          type='number'
          placeholder='사용자 번호'
        />
      </div>

      <Button>검색</Button>
    </div>
  );
};

export default SearchHobby;
