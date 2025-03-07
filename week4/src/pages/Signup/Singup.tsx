import { Link } from 'react-router-dom';
import * as styles from './Signup.css';
import SignupForm from './components/SignupForm';

const Signup = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>회원가입</h2>
      <SignupForm />
      <div className={styles.linkContainer}>
        <p>이미 회원이신가요?</p>
        <Link to='/login' className={styles.link}>
          로그인
        </Link>
      </div>
    </section>
  );
};

export default Signup;
