import Button from '@components/button/Button';
import * as styles from './SearchHobby.css';
import Input from '@components/input/Input';

const SearchHobby = () => {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.title}>나의 취미</h3>
        <p>안녕</p>
      </div>

      <div>
        <h3 className={styles.title}>다른 사람들의 취미</h3>

        <Input type='number' placeholder='사용자 번호' />
      </div>

      <Button>검색</Button>
    </div>
  );
};

export default SearchHobby;
