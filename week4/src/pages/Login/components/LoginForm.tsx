import * as styles from './LoginForm.css';
import Input from '@components/input/Input';
import Button from '@components/button/Button';

const LoginForm = () => {
  return (
    <form className={styles.form} autoComplete='off'>
      <Input type='text' placeholder='아이디' />
      <Input type='password' placeholder='비밀번호' />
      <Button type='submit'>로그인</Button>
    </form>
  );
};

export default LoginForm;
