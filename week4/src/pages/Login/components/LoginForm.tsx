import * as styles from './LoginForm.css';

const LoginForm = () => {
  return (
    <form className={styles.form} autoComplete='off'>
      <input className={styles.input} type='text' placeholder='아이디' />
      <input className={styles.input} type='password' placeholder='비밀번호' />
      <button className={styles.button} type='submit'>
        로그인
      </button>
    </form>
  );
};

export default LoginForm;
