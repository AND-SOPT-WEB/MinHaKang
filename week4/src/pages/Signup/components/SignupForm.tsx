import { useState } from 'react';
import * as styles from './SignupForm.css';
import Input from '@components/input/Input';
import Button from '@components/button/Button';
import { User } from '@type/user';
import { postSignUp } from '@api/user';

const SignupForm = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<User>({
    username: '',
    password: '',
    hobby: '',
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onNext = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (step < 3) {
      setStep(step + 1);
    }
    if (step === 3) {
      try {
        const response = await postSignUp(formData);
        alert(`회원가입에 성공! 회원 번호: ${response.no}`);
      } catch (error: any) {
        alert(error.message);
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={onNext} autoComplete='off'>
      {step === 1 && (
        <>
          <h3 className={styles.formTitle}>이름</h3>
          <Input
            type='text'
            name='username'
            placeholder='사용자 이름을 입력해주세요'
            value={formData.username}
            onChange={onInputChange}
            required
          />
        </>
      )}

      {step === 2 && (
        <>
          <h3 className={styles.formTitle}>비밀번호</h3>
          <Input
            type='password'
            name='password'
            placeholder='비밀번호를 입력해주세요'
            value={formData.password}
            onChange={onInputChange}
            required
          />
          <Input type='password' placeholder='비밀번호 확인' required />
        </>
      )}

      {step === 3 && (
        <>
          <h3 className={styles.formTitle}>취미</h3>
          <Input
            type='text'
            name='hobby'
            placeholder='취미를 입력해주세요'
            value={formData.hobby}
            onChange={onInputChange}
            required
          />
        </>
      )}

      <Button>{step < 3 ? '다음' : '회원가입'}</Button>
    </form>
  );
};

export default SignupForm;
