import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './SignupForm.css';
import Button from '@components/button/Button';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '@constants/messages';
import { SignupData } from '@type/user';
import { postSignUp } from '@api/user';
import useFormData from '@hooks/useFormData';
import UsernameStep from './steps/UsernameStep';
import PasswordStep from './steps/PasswordStep';
import HobbyStep from './steps/HobbyStep';

const SignupForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
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
    } else {
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

  return (
    <form className={styles.form} onSubmit={onNext} autoComplete='off'>
      {step === 1 && (
        <UsernameStep formData={formData} onInputChange={onInputChange} />
      )}
      {step === 2 && (
        <PasswordStep formData={formData} onInputChange={onInputChange} />
      )}
      {step === 3 && (
        <HobbyStep formData={formData} onInputChange={onInputChange} />
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
