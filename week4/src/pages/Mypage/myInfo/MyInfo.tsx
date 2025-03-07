import * as styles from './MyInfo.css';
import EditProfileForm from './components/EditProfileForm';

const MyInfo = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>내 정보 수정하기</h2>
      <EditProfileForm />
    </section>
  );
};

export default MyInfo;
