import Input from '@components/input/Input';
import * as styles from '../SignupForm.css';
import { SingupFormData } from '@type/form';

const HobbyStep = ({ formData, onInputChange }: SingupFormData) => (
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
);

export default HobbyStep;
