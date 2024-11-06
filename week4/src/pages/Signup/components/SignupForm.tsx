import { useState } from 'react';
import * as styles from './SignupForm.css';

const SignupForm = () => {
  const [step, setStep] = useState<number>(1);

  const onNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // 임시로 취미 -> 이름입력란으로 이동
      setStep(1);
    }
  };

  return (
    <form className={styles.form} onSubmit={onNext} autoComplete='off'>
      {step === 1 && (
        <>
          <h3 className={styles.formTitle}>이름</h3>
          <input
            className={styles.input}
            type='text'
            name='name'
            placeholder='사용자 이름을 입력해주세요'
            required
          />
        </>
      )}

      {step === 2 && (
        <>
          <h3 className={styles.formTitle}>비밀번호</h3>
          <input
            className={styles.input}
            type='password'
            name='password'
            placeholder='비밀번호를 입력해주세요'
            required
          />
          <input
            className={styles.input}
            type='password'
            name='confirmPassword'
            placeholder='비밀번호 확인'
            required
          />
        </>
      )}

      {step === 3 && (
        <>
          <h3 className={styles.formTitle}>취미</h3>
          <input
            className={styles.input}
            type='text'
            name='hobby'
            placeholder='취미를 입력해주세요'
            required
          />
        </>
      )}

      <button className={styles.button} type='submit'>
        {step < 3 ? '다음' : '회원가입'}
      </button>
    </form>
  );
};

export default SignupForm;
