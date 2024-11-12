import Input from '@components/input/Input';
import * as styles from '../SignupForm.css';
import { SingupFormData } from '@type/form';

const UsernameStep = ({ formData, onInputChange }: SingupFormData) => (
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
);

export default UsernameStep;
