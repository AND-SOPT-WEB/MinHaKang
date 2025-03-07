import * as styles from './Hobby.css';
import SearchHobby from './components/SearchHobby';

const Hobby = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>취미</h2>
      <SearchHobby />
    </section>
  );
};

export default Hobby;
