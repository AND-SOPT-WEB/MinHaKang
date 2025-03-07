import { MAX_INPUT_LENGTH } from '@constants/config';
import { ERROR_MESSAGE } from '@constants/messages';
import { useState } from 'react';

const useFormData = <T>(value: T) => {
  const [formData, setFormData] = useState<T>(value);
  const [error, setError] = useState<string | null>(null);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (value.length > MAX_INPUT_LENGTH) {
      setError(ERROR_MESSAGE.INVALID_INPUT_LENGTH);
    } else {
      setError(null);
    }
  };

  return { formData, error, onInputChange };
};

export default useFormData;
