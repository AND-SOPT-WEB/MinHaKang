import { useState } from 'react';
import * as styles from '../SignupForm.css';
import Input from '@components/input/Input';
import visibilityIcon from '@assets/visibility.svg';
import visibilityOffIcon from '@assets/visibility_off.svg';
import { SingupFormData } from '@type/form';

const PasswordStep = ({ formData, onInputChange }: SingupFormData) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
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
  );
};

export default PasswordStep;
