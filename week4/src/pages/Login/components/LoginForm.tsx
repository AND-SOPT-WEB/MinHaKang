import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './LoginForm.css';
import Input from '@components/input/Input';
import Button from '@components/button/Button';
import { ACCESS_TOKEN_KEY } from '@constants/api';
import { postLogin } from '@api/user';

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
      <Button type='submit'>로그인</Button>
    </form>
  );
};

export default LoginForm;
