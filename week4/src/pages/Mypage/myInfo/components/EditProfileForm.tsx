import * as styles from './EditProfileForm.css';
import Input from '@components/input/Input';
import Button from '@components/button/Button';
import useEditProfile from '@hooks/useEditProfile';

const EditProfileForm = () => {
  const {
    newPassword,
    setNewPassword,
    newHobby,
    setNewHobby,
    handleUpdateProfile,
  } = useEditProfile();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUpdateProfile();
  };

  return (
    <form className={styles.form} autoComplete='off' onSubmit={handleSubmit}>
      <div className={styles.inputSection}>
        <label htmlFor='newPassword'>새 비밀번호</label>
        <Input
          type='password'
          id='newPassword'
          placeholder='새 비밀번호를 입력하세요'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>

      <div className={styles.inputSection}>
        <label htmlFor='newHobby'>새 취미</label>
        <Input
          type='text'
          id='newHobby'
          placeholder='새 취미를 입력하세요'
          value={newHobby}
          onChange={(e) => setNewHobby(e.target.value)}
        />
      </div>
      <Button type='submit'>저장</Button>
    </form>
  );
};

export default EditProfileForm;
