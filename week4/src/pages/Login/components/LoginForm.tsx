import { useNavigate } from 'react-router-dom';
import * as styles from './LoginForm.css';
import Input from '@components/input/Input';
import Button from '@components/button/Button';
import { ACCESS_TOKEN_KEY } from '@constants/api';
import { postLogin } from '@api/user';
import { LoginData } from '@type/user';
import useFormData from '@hooks/useFormData';

const LoginForm = () => {
  const navigate = useNavigate();
  const { formData, onInputChange } = useFormData<LoginData>({
    username: '',
    password: '',
  });
  const isButtonDisabled =
    !formData.username.trim() || !formData.password.trim();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = await postLogin(formData);
      sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
      navigate('/mypage/hobby');
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit} autoComplete='off'>
      <Input
        type='text'
        name='username'
        placeholder='아이디'
        value={formData.username}
        onChange={onInputChange}
        required
      />
      <Input
        type='password'
        name='password'
        placeholder='비밀번호'
        value={formData.password}
        onChange={onInputChange}
        required
      />
      <Button disabled={isButtonDisabled} type='submit'>
        로그인
      </Button>
    </form>
  );
};

export default LoginForm;
