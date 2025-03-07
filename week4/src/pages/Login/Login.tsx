import { Link } from 'react-router-dom';
import * as styles from './Login.css';
import LoginForm from './components/LoginForm';

const Login = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>로그인</h2>
      <LoginForm />
      <Link to='/signup' className={styles.link}>
        회원가입
      </Link>
    </section>
  );
};

export default Login;
