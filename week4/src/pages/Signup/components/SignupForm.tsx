import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './SignupForm.css';
import Input from '@components/input/Input';
import Button from '@components/button/Button';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '@constants/messages';
import { SignupData } from '@type/user';
import { postSignUp } from '@api/user';
import useFormData from '@hooks/useFormData';
import visibilityIcon from '@assets/visibility.svg';
import visibilityOffIcon from '@assets/visibility_off.svg';

const SignupForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const { formData, error, onInputChange } = useFormData<SignupData>({
    username: '',
    password: '',
    passwordConfirm: '',
    hobby: '',
  });
  const isMatchPassword = formData.password === formData.passwordConfirm;

  const onNext = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (step < 3) {
      setStep(step + 1);
    }
    if (step === 3) {
      try {
        const response = await postSignUp(formData);
        alert(SUCCESS_MESSAGE.SIGNUP(response.no));
        navigate('/login');
      } catch (error) {
        alert((error as Error).message);
      }
    }
  };

  const isButtonDisabled = () => {
    if (error) return true;
    if (step === 1) return !formData.username.trim();
    if (step === 2) {
      return (
        !formData.password.trim() ||
        !formData.passwordConfirm.trim() ||
        !isMatchPassword
      );
    }
    if (step === 3) return !formData.hobby.trim();
    return true;
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

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
          <div className={styles.inputContainer}>
            <Input
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder='비밀번호를 입력해주세요'
              value={formData.password}
              onChange={onInputChange}
              required
            />
            <img
              src={showPassword ? visibilityOffIcon : visibilityIcon}
              alt='비밀번호 표시'
              className={styles.visibilityIcon}
              onClick={togglePasswordVisibility}
            />
          </div>

          <Input
            type='password'
            name='passwordConfirm'
            placeholder='비밀번호 확인'
            value={formData.passwordConfirm}
            onChange={onInputChange}
            required
          />
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

      {error && <p className={styles.error}>{error}</p>}
      {!isMatchPassword && !error && (
        <p className={styles.error}>{ERROR_MESSAGE.PASSWORD_MISMATCH}</p>
      )}

      <Button disabled={isButtonDisabled()}>
        {step < 3 ? '다음' : '회원가입'}
      </Button>
    </form>
  );
};

export default SignupForm;
