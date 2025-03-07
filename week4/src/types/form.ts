import { SignupData } from '@type/user';
import { ChangeEvent } from 'react';

export interface SingupFormData {
  formData: SignupData;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
