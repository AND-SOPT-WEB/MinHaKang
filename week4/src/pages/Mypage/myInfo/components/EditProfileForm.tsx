import * as styles from './EditProfileForm.css';
import Input from '@components/input/Input';
import Button from '@components/button/Button';

const EditProfileForm = () => {
  return (
    <form className={styles.form} autoComplete='off'>
      <div className={styles.inputSection}>
        <label htmlFor='newPassword'>새 비밀번호</label>
        <Input
          type='password'
          id='newPassword'
          placeholder='새 비밀번호를 입력하세요'
        />
      </div>

      <div className={styles.inputSection}>
        <label htmlFor='newHobby'>새 취미</label>
        <Input type='text' id='newHobby' placeholder='새 취미를 입력하세요' />
      </div>

      <Button type='submit'>저장</Button>
    </form>
  );
};

export default EditProfileForm;
